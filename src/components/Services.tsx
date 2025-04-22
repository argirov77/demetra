// src/components/Services.tsx
'use client'

import React from 'react'
import AffiliateNetwork from './AffiliateNetwork'
import ComparisonService from './comparison/ComparisonService'

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 space-y-20">
        {/* Affiliate Network section */}
        <AffiliateNetwork />

        {/* Comparison Websites section */}
        <ComparisonService />
      </div>
    </section>
  )
}
