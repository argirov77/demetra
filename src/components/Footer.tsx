'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-darkBlue text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <Image
            src="/assets/logo-white.png"
            alt="Demetra Media"
            width={160}
            height={40}
            className="mb-4 mx-auto md:mx-0"
          />
          <p className="text-sm">© {new Date().getFullYear()} Demetra Media. All rights reserved.</p>
        </div>
        <div className="text-center md:text-right">
          <h4 className="font-bold mb-2">Contact Us</h4>
          <p className="text-sm">Email: info@demetramedia.com</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
          <div className="flex space-x-4 mt-4 justify-center md:justify-end">
            <Link href="#" className="hover:text-teal transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-teal transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-teal transition-colors">Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

