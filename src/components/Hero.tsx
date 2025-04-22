// src/components/Hero.jsx
'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const keyPhrases = [
  'Innovative Solutions',
  'High Conversion Rates',
  'Cutting‑Edge Strategies',
  'Data‑Driven Growth',
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
      {/* === SVG-волны === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMax slice"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '80%',
            height: '60%',
            minHeight: '250px',
            transform: 'translate(20%, 15%) rotate(-30deg)',
            transformOrigin: 'bottom right',
          }}
        >
          {Array.from({ length: 15 }).map((_, i) => {
            const y0 = 350 + i * 10
            const c1 = y0 - 40
            const c2 = y0 + (i % 2 ? 30 : -30)
            const y1 = y0 + 70
            const colors = ['#00A9BF', '#4B0082', '#00347E']
            const color = colors[i % colors.length]
            const opacity = ((15 - i) / 20).toFixed(2)
            return (
              <path
                key={i}
                d={`
                  M0,${y0}
                  C360,${c1} 720,${c2} 1440,${y1}
                  L1440,600 0,600 Z
                `}
                fill={color}
                fillOpacity={opacity}
              />
            )
          })}
        </svg>
      </div>

      {/* радиальный градиент для контраста текста */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, transparent 80%)',
        }}
      />

      {/* === Контент Hero === */}
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
          className="flex justify-center items-center gap-x-4 gap-y-2 text-2xl md:text-3xl mb-16"
        >
          <span className="text-gray-700">Experience</span>
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

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-teal hover:bg-teal-700 text-white px-12 py-4 rounded-lg font-medium shadow-lg"
        >
          Get Started
        </motion.button>
      </div>

      {/* плавный SVG-переход в следующую секцию */}
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
