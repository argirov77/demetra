import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demetra Media',
  description: 'Performance-Based Affiliate Marketing Solutions & Leading Comparison Websites',
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
