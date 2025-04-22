'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const benefits = [
  'Instant side‑by‑side comparison',
  'Real‑time price & feature updates',
  'Customizable filters & sorting',
  'Mobile‑first responsive design',
]

export default function ComparisonService() {
  return (
    <section className="relative bg-gradient-to-r from-teal-600 to-purple-600 overflow-hidden py-24">
      {/* SVG‑узор поверх градиента */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="white" />
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#dots)" />
      </svg>

      <div className="container mx-auto relative z-10 px-4 flex flex-col lg:flex-row items-start gap-12">
        {/* Левая колонка — текстовые облачка */}
        <div className="lg:w-1/3 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Comparison Websites<br/>
            that <span className="text-yellow-300">Convert</span>
          </motion.h2>

          {benefits.map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              className="flex items-center bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 shadow-md"
            >
              <div className="w-10 h-10 flex-shrink-0 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                {/* Номер шага */}
                <span className="text-white font-semibold">{i + 1}</span>
              </div>
              <p className="text-white font-medium">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Пустая средняя колонка (для отступа на десктопе) */}
        <div className="hidden lg:block lg:w-1/6" />

        {/* Правая колонка — скриншот с «точками» */}
        <div className="lg:w-1/2 relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/services/comparison-websites.jpg"
              alt="Comparison Interface"
              width={800}
              height={500}
              objectFit="cover"
            />
          </motion.div>

          {/* Привязанные «горячие точки» */}
          {[
            { top: '20%', left: '30%' },
            { top: '45%', left: '60%' },
            { top: '70%', left: '40%' },
          ].map((pos, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 + idx * 0.3, type: 'spring', stiffness: 200 }}
              className="absolute"
              style={{ top: pos.top, left: pos.left }}
            >
              <div className="w-4 h-4 bg-yellow-300 rounded-full shadow-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
