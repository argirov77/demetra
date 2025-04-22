// src/components/Services.tsx
'use client'

import AffiliateNetwork from './AffiliateNetwork'
import ComparisonService from './comparison/ComparisonService'

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 space-y-20">
        <AffiliateNetwork />
        <ComparisonService />
      </div>
    </section>
  )
}
