'use client'
import { useState } from 'react'
import ComparisonService from './ComparisonService'
import AffiliateNetwork from './AffiliateNetwork'

export default function Services() {
  const [active, setActive] = useState('Affiliate')

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActive('Affiliate')}
            className={`px-6 py-3 font-semibold ${
              active === 'Affiliate' ? 'bg-teal text-white' : 'bg-white text-teal'
            } rounded-l-md transition`}
          >
            Affiliate Network
          </button>
          <button
            onClick={() => setActive('Comparison')}
            className={`px-6 py-3 font-semibold ${
              active === 'Comparison' ? 'bg-teal text-white' : 'bg-white text-teal'
            } rounded-r-md transition`}
          >
            Comparison Websites
          </button>
        </div>

        {active === 'Affiliate' && <AffiliateNetwork />}
        {active === 'Comparison' && <ComparisonService />}
      </div>
    </section>
  )
}
 