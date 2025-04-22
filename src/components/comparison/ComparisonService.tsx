// src/components/comparison/ComparisonService.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import IdentifyingStep from './IdentifyingStep'
import TargetingStep   from './TargetingStep'
import ConnectingStep  from './ConnectingStep'

// Обязательно передаём id! (этот пропс у вас описан в интерфейсах шагов)
const identifying = {
  id: 1,
  title: 'Identifying',
  description:
    "We perform an in‑depth audit of search behavior to uncover exactly what your potential customers are looking for and why.",
  query: 'best language learning services',
}

const targeting = {
  id: 2,
  title: 'Targeting',
  description:
    "We craft and deploy content that captures the highest‑intent search segments and steers them straight to your comparison page.",
  query: 'top 10 background check services',
  results: [   
    'Top 10 background check services',
    'Background check service reviews',
    'Best background check website',
  ],
}

const connecting = {
  id: 3,   // ← вот это и не забываем!
  title: 'Connecting',
  description:
    "We deliver highly motivated, purchase‑ready users straight to your comparison pages, boosting your lead quality and conversion.",
}

export default function ComparisonService() {
  return (
    <motion.section
      id="comparison"
      className="relative bg-gray-50 py-24 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 space-y-32">
        <h2 className="text-center font-poppins font-bold text-darkBlue text-4xl md:text-5xl mb-12">
          Comparison <span className="text-teal">Websites</span>
        </h2>

        {/* Передаём именно все четыре свойства из identifying */}
        <IdentifyingStep {...identifying} />

        {/* И аналогично для targeting */}
        <TargetingStep {...targeting} />

        {/* А тут — обязательно id, title и description */}
        <ConnectingStep {...connecting} />
      </div>
    </motion.section>
  )
}

