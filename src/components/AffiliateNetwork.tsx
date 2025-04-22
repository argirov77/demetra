// src/components/AffiliateNetwork.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const STEPS = [
  {
    id: 1,
    icon: '/assets/services/1.png',
    title: 'Affiliate Onboarding',
    desc: 'Fast partner approval and seamless integration into your network.',
  },
  {
    id: 2,
    icon: '/assets/services/2.png',
    title: 'Multi‑Channel Promotion',
    desc: 'Launch across email, social, search & native for maximum reach.',
  },
  {
    id: 3,
    icon: '/assets/services/3.png',
    title: 'Live Analytics & Optimization',
    desc: 'Real‑time dashboard to track KPIs and tweak campaigns on the fly.',
  },
  {
    id: 4,
    icon: '/assets/services/4.png',
    title: 'Revenue Scaling',
    desc: 'Proven strategies to grow your affiliate income.',
  },
]

const lineVariants = {
  hidden: { pathLength: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    transition: { delay: i * 0.5 + 0.3, duration: 0.8, ease: 'easeInOut' },
  }),
}

export default function AffiliateNetwork() {
  return (
    <motion.section
      id="affiliate"
      className="relative bg-white py-24 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Фоновые диагонали */}
      <div
        className="absolute top-0 left-0 w-2/3 h-full bg-teal-100 opacity-20
                   transform -rotate-12 origin-top-left pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-2/3 h-full bg-darkBlue/20 opacity-20
                   transform rotate-12 origin-bottom-right pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Заголовок секции */}
        <h2 className="text-center font-poppins font-bold text-darkBlue text-4xl md:text-5xl mb-12">
        Affiliate <span className="text-teal">Network</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.id}>
              {/* Карточка шага */}
              <div
                className="relative flex-1 min-h-[300px] bg-white rounded-2xl p-8 shadow-lg
                           hover:shadow-2xl transition-shadow duration-300"
                style={{ zIndex: STEPS.length - i }}
              >
                {/* Лёгкий градиент при ховере */}
                <span
                  className="absolute inset-0 rounded-2xl pointer-events-none
                             bg-gradient-to-br from-teal-300 to-darkBlue/50 opacity-0
                             hover:opacity-20 transition-opacity duration-500"
                />
                <div className="relative z-10 text-center space-y-4">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={64}
                    height={64}
                    className="mx-auto"
                  />
                  <h3 className="text-xl font-semibold text-darkBlue">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>

              {/* Пунктирная линия между карточками */}
              {i < STEPS.length - 1 && (
                <>
                  {/* Горизонтальная линия для desktop */}
                  <motion.svg
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={lineVariants}
                    className="hidden lg:block flex-1 h-[2px]"
                    viewBox="0 0 100 2"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M0 1 L100 1"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      strokeDasharray="8 8"
                      strokeLinecap="round"
                    />
                  </motion.svg>

                  {/* Вертикальная линия для mobile */}
                  <motion.svg
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={lineVariants}
                    className="lg:hidden w-[2px] h-12 my-4 mx-auto"
                    viewBox="0 0 2 100"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M1 0 L1 100"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
