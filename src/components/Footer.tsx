// src/components/Footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-darkBlue text-white pt-16 pb-8 overflow-hidden">
      {/* декоративные диагонали */}
      <div
        className="absolute top-0 left-0 w-2/3 h-full bg-teal-500/10 transform -rotate-12 origin-top-left pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-2/3 h-full bg-darkBlue/20 transform rotate-12 origin-bottom-right pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Логотип + копирайт */}
        <div className="text-center md:text-left">
          <Link href="/">
            <Image
              src="/assets/logo-white.png"
              alt="Demetra Media"
              width={160}
              height={40}
              className="mx-auto md:mx-0 mb-4"
            />
          </Link>
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Demetra Media. All rights reserved.
          </p>
        </div>

        {/* Контакты */}
        <div className="text-center md:text-left">
          <h4 className="font-poppins text-xl font-semibold mb-3 underline underline-offset-4 decoration-teal-400">
            Contact Us
          </h4>
          <p className="text-sm text-white/80 mb-1">
            Email:{' '}
            <Link
              href="mailto:info@demetramedia.com"
              className="hover:text-teal-300 transition"
            >
              info@demetramedia.com
            </Link>
          </p>
          <p className="text-sm text-white/80">
            Phone:{' '}
            <Link
              href="tel:+15551234567"
              className="hover:text-teal-300 transition"
            >
              +1 (555) 123‑4567
            </Link>
          </p>
        </div>

        {/* Социальные ссылки */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="font-poppins text-xl font-semibold mb-3 underline underline-offset-4 decoration-teal-400 text-center md:text-right">
            Follow Us
          </h4>
          <div className="flex space-x-6">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-teal-300 transition"
            >
              LinkedIn
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-teal-300 transition"
            >
              Twitter
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-teal-300 transition"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
