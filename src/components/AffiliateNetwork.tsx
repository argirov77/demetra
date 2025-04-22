// src/components/AffiliateNetwork.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const STEPS = [
  {
    id: 1,
    title: 'Affiliate Onboarding',
    desc: 'Fast partner approval and seamless integration into your network.',
  },
  {
    id: 2,
    title: 'Multi‑Channel Promotion',
    desc: 'Launch across email, social, search & native for maximum reach.',
  },
  {
    id: 3,
    title: 'Live Analytics & Optimization',
    desc: 'Real‑time dashboard to track KPIs and tweak campaigns on the fly.',
  },
  {
    id: 4,
    title: 'Revenue Scaling',
    desc: 'Proven strategies to grow your affiliate income.',
  },
]

export default function AffiliateNetwork() {
  return (
    <section id="affiliate" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Affiliate Network
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-center px-4 gap-4">
        {STEPS.map((step, idx) => (
          <React.Fragment key={step.id}>
            {/* Шаг */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 1.6,
                duration: 0.8,
              }}
              className="flex-shrink-0 bg-gray-50 p-6 rounded-xl shadow-md w-64 mx-auto"
            >
              <div className="mb-4">
                <Image
                  src={`/assets/services/${step.id}.png`}
                  alt={step.title}
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>

            {/* Соединительная линия */}
            {idx < STEPS.length - 1 && (
              <>
                {/* вертикальная для мобильных */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 80 }}
                  transition={{
                    delay: idx * 1.6 + 0.8,
                    duration: 0.8,
                  }}
                  className="block md:hidden w-px border-l-2 border-dashed border-gray-300"
                />

                {/* горизонтальная для десктопа */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{
                    delay: idx * 1.6 + 0.8,
                    duration: 0.8,
                  }}
                  className="hidden md:block h-px border-t-2 border-dashed border-gray-300"
                />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
