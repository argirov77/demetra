// src/components/comparison/TargetingStep.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'

interface SearchStep {
  title: string
  description: string
  query: string
  results: string[]
}

export default function TargetingStep({
  title,
  description,
  query,
  results,
}: SearchStep) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useInView(ref, { margin: '-50% 0px -50% 0px' })
  const [typed, setTyped] = useState('')
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (!active) {
      setTyped('')
      setShowResults(false)
      return
    }
    let i = 0
    const tick = () => {
      if (i <= query.length) {
        setTyped(query.slice(0, i))
        i++
        setTimeout(tick, 80 + Math.random() * 40)
      } else {
        setTimeout(() => setShowResults(true), 400)
      }
    }
    tick()
  }, [active, query])

  return (
    <div ref={ref} className="relative overflow-hidden bg-gray-50 py-20">
      {/* Декоративные диагонали */}
      <div
        className="absolute inset-0 bg-teal opacity-5 transform rotate-12 origin-top-left"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-darkBlue opacity-5 transform -rotate-12 origin-bottom-right"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start gap-16">
        {/* «Окошко браузера» */}
        <motion.div
          className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden min-h-[360px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Тулбар */}
          <div className="h-8 bg-gray-200 flex items-center px-4 space-x-2">
            <span className="w-3 h-3 bg-red-400 rounded-full" />
            <span className="w-3 h-3 bg-yellow-400 rounded-full" />
            <span className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
          {/* Контент */}
          <div className="p-6 flex flex-col">
            {/* Поле поиска — фиксированная ширина */}
            <div className="w-full bg-white rounded-full border border-gray-300 flex items-center px-5 py-3 space-x-3 mb-6">
              <Image
                src="/assets/services/google-icon.svg"
                width={20}
                height={20}
                alt="Google"
              />
              <span className="flex-1 text-gray-800 truncate">
                {typed}
              </span>
              {active && (
                <motion.span
                  className="animate-pulse text-gray-400"
                  aria-hidden="true"
                >
                  |
                </motion.span>
              )}
            </div>

            {/* Результаты */}
            <AnimatePresence>
              {showResults && (
                <motion.ul
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ staggerChildren: 0.15, ease: 'easeOut' }}
                >
                  {results.map((res, idx) => (
                    <motion.li
                      key={idx}
                      className={`p-4 rounded-lg shadow ${
                        idx === 0
                          ? 'bg-teal text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      {res}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Текстовая колонка */}
        <motion.div
          className="flex-1 max-w-xl space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <h3 className="text-3xl font-poppins font-bold text-darkBlue">
            2. {title}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
