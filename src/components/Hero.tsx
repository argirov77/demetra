// src/components/Hero.jsx
'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const keyPhrases = [
  'Innovative Solutions',
  'High Conversion Rates',
  'Cutting-Edge Strategies',
  'Data-Driven Growth',
]

export default function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => {
      setIdx(i => (i + 1) % keyPhrases.length)
    }, 3500)
    return () => clearInterval(iv)
  }, [])

  return (
    <section className="relative bg-white pt-28 pb-60 overflow-hidden">
      {/* === «волны» в нижнем правом углу === */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none overflow-hidden"
        style={{
          width: '140%',      // растянули, чтобы волны выходили за границы
          height: '60%',
          minHeight: '200px',
          transform: 'translateX(15%) translateY(10%)',
        }}
      >
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMaxYMax slice"
          className="w-full h-full"
        >
          <path
            d="M0,350 C360,310 720,400 1440,350 L1440,600 0,600 Z"
            fill="#00C2D1"
            fillOpacity="0.4"
          />
          <path
            d="M0,380 C360,340 720,430 1440,380 L1440,600 0,600 Z"
            fill="#007ACC"
            fillOpacity="0.3"
          />
          <path
            d="M0,410 C360,370 720,460 1440,410 L1440,600 0,600 Z"
            fill="#00347E"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      {/* радиальный градиент для повышения читабельности */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, transparent 80%)',
        }}
      />

      {/* === контент Hero === */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-poppins text-darkBlue text-5xl md:text-6xl lg:text-7xl font-bold mb-12"
        >
          Grow Your Business with{' '}
          <span className="text-teal">Demetra Media</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-2 text-2xl md:text-3xl mb-16"
        >
          <span className="font-medium text-gray-700">Experience</span>
          <div className="relative overflow-hidden w-[24ch] h-[1.3em]">
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 whitespace-nowrap text-teal font-semibold"
              >
                {keyPhrases[idx]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Заменили «Get Started» на кнопку партнёра */}
        <motion.a
          href="https://aff.demetramedia.com/v2/sign/in"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block bg-teal hover:bg-teal-700 text-white px-12 py-4 rounded-lg font-medium shadow-lg transition"
        >
          Join Affiliate Program
        </motion.a>
      </div>

      {/* SVG-переход в следующую секцию */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none"
        style={{ height: '120px' }}
      >
        <svg
          className="block w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z"
            fill="#F3F7FA"
          />
        </svg>
      </div>
    </section>
  )
}
