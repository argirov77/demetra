import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demetra Media',
  description: 'Demetra Media transforms affiliate marketing through innovative strategies, dynamic comparison websites, and a global network—delivering outstanding results for your business.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
