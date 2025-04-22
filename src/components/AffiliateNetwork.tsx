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

      {/*
        flex-col по умолчанию (<=lg), flex-row-nowrap на lg+,
        gap-6 между карточками
      */}
      <div className="flex flex-col lg:flex-row lg:flex-nowrap items-center justify-center px-4 gap-6">
        {STEPS.map((step, idx) => (
          <React.Fragment key={step.id}>
            <motion.div
              className="flex-shrink-0 bg-gray-50 p-6 rounded-xl shadow-md w-full lg:w-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
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

            {idx < STEPS.length - 1 && (
              <>
                {/*
                  соединитель:
                  - показываем как вертикальную линию для <=lg (lg:hidden)
                  - как горизонтальную для >=lg (lg:block)
                */}
                <motion.div
                  className="lg:hidden w-px border-l-2 border-dashed border-gray-300 mx-auto"
                  initial={{ height: 0 }}
                  whileInView={{ height: 60 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: idx * 0.3 + 0.2 }}
                />
                <motion.div
                  className="hidden lg:block h-px border-t-2 border-dashed border-gray-300"
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ duration: 0.6, delay: idx * 0.3 + 0.2 }}
                />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
