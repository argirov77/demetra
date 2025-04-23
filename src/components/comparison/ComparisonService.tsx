// src/components/comparison/ComparisonService.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Ваши три шага
import IdentifyingStep from './IdentifyingStep'
import TargetingStep   from './TargetingStep'
import ConnectingStep  from './ConnectingStep'

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
      {/* контейнер с отступами между секциями */}
      <div className="container mx-auto px-6 space-y-32">
        {/* Заголовок раздела */}
        <h2 className="text-center font-poppins font-bold text-darkBlue text-4xl md:text-5xl mb-12">
          Comparison <span className="text-teal">Websites</span>
        </h2>

        {/* Шаг 1: Identifying */}
        <IdentifyingStep
          title="Identifying"
          description="We perform an in-depth audit of search behavior to uncover exactly what your potential customers are looking for and why."
          query="best language learning services"
        />

        {/* Шаг 2: Targeting */}
        <TargetingStep
          title="Targeting"
          description="We refine targeted campaigns by analyzing real-time search intent, ensuring the highest-intent users land directly on your comparison pages for maximum conversion."
          query="top 10 language course platforms"
          results={[
            'Top 10 language course platforms',
            'Language learning platform reviews',
            'Best language course websites',
          ]}
        />

        {/* Шаг 3: Connecting */}
        <ConnectingStep />
      </div>
    </motion.section>
  )
}
