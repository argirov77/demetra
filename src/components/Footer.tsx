// src/components/Footer.tsx
'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-darkBlue text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* —————————————————————————————————————————————————————————————————————————  
             Логотип в виде текста + копирайт  
        ————————————————————————————————————————————————————————————————————————— */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-poppins font-bold text-3xl text-white">
            Demetra <span className="text-teal">Media</span>
          </h3>
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Demetra Media<br />
            All rights reserved.
          </p>
        </div>

        {/* —————————————————————————————————————————————————————————————————————————  
             Контакты и «Follow Us»  
        ————————————————————————————————————————————————————————————————————————— */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          {/* Контакт */}
          <div className="text-center md:text-right space-y-2">
            <h4 className="text-xl font-semibold underline decoration-teal-400 underline-offset-4">
              Contact
            </h4>
            <Link
              href="mailto:admin@demetramedia.com"
              className="flex items-center justify-center md:justify-end space-x-2 hover:text-teal transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-teal-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 11h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">admin@demetramedia.com</span>
            </Link>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-right space-y-2">
            <h4 className="text-xl font-semibold underline decoration-teal-400 underline-offset-4">
              Follow Us
            </h4>
            <Link
              href="https://t.me/demetramediaprivat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-end space-x-2 hover:text-teal transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-teal-400 flex-shrink-0"
                viewBox="0 0 240 240"
                fill="currentColor"
              >
                <path d="M120,0C53.7,0,0,53.7,0,120c0,66.3,53.7,120,120,120s120-53.7,120-120C240,53.7,186.3,0,120,0z M175.5,81.6
                  l-18.5,87.2c-1.4,6.2-5.1,7.8-10.3,4.9l-28.5-21.1l-13.7,13.2c-1.5,1.5-2.8,2.8-5.7,2.8l2-29.1l52.9-47.8c2.3-1.9-0.5-2.9-3.6-1
                  l-65.4,41.1l-28.1-8.8c-6.1-1.9-6.2-6.1,1.3-9l110.2-42.4C174.7,35,179.7,37.7,175.5,81.6z"/>
              </svg>
              <span className="text-sm">@demetramediaprivat</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
