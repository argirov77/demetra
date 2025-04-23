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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 space-y-24">
        {/* Заголовок раздела */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center font-poppins font-bold text-darkBlue text-4xl md:text-5xl"
        >
          Comparison <span className="text-teal">Websites</span>
        </motion.h2>

        {/* 1. Identifying */}
        <IdentifyingStep
          title="Identifying"
          description="We audit search behavior to uncover exactly what your audience is looking for—and why."
          query="best online language courses"
        />

        {/* 2. Targeting */}
        <TargetingStep
          title="Targeting"
          description="We target high-intent search segments, driving qualified users straight to your comparison pages."
          query="top online language learning platforms"
          results={[
            'Top online language platforms',
            'User reviews & ratings',
            'Best language course websites',
          ]}
        />

        {/* 3. Connecting */}
        <ConnectingStep />
      </div>
    </motion.section>
  )
}
