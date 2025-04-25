// src/components/comparison/ConnectingStep.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'

export default function ConnectingStep() {
  const ref = useRef<HTMLDivElement>(null)
  const active = useInView(ref, { margin: '-40% 0px -40% 0px' })

  const CLIENT_COUNT = 6
  const PURCHASE_AMOUNTS = [9.99, 19.99, 29.99, 39.99, 49.99]
  const [bubbles, setBubbles] = useState<{ id: number; angle: number; amount: number }[]>([])
  const [total, setTotal] = useState(0)
  const nextId = useRef(0)

  // спавним «пузырьки»
  useEffect(() => {
    if (!active) return
    const timer = setInterval(() => {
      const id = nextId.current++
      const angle = (id % CLIENT_COUNT) * (360 / CLIENT_COUNT)
      const amount = PURCHASE_AMOUNTS[Math.floor(Math.random() * PURCHASE_AMOUNTS.length)]
      setBubbles(b => [...b, { id, angle, amount }])
      setTotal(t => +(t + amount).toFixed(2))
      setTimeout(() => setBubbles(b => b.filter(x => x.id !== id)), 1800)
    }, 2000)
    return () => clearInterval(timer)
  }, [active])

  // переводим угол→% позицию
  const polarToPercent = (deg: number, radius = 40) => {
    const rad = (deg * Math.PI) / 180
    return {
      left: `${50 + Math.cos(rad) * radius}%`,
      top: `${50 + Math.sin(rad) * radius}%`,
    }
  }

  return (
    <div
      ref={ref}
      className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 overflow-hidden"
    >
      {/* ── Левая: круг клиентов + итого ── */}
      <div className="flex-1 flex flex-col items-center">
        <div className="relative w-full aspect-square max-w-sm">
          {/* ── Центральный значок, адаптивный размер ── */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-1/5 md:w-1/6 lg:w-1/7">
              <Image
                src="/assets/services/website.png"
                alt="Website"
                width={80}
                height={80}
                className="w-full h-auto drop-shadow-lg"
              />
            </div>
          </div>

          {/* ── Пунктирные линии ── */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {Array.from({ length: CLIENT_COUNT }).map((_, i) => {
              const { left, top } = polarToPercent(i * (360 / CLIENT_COUNT))
              return (
                <line
                  key={i}
                  x1={left}
                  y1={top}
                  x2="50%"
                  y2="50%"
                  stroke="#94A3B8"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
              )
            })}
          </svg>

          {/* ── Аватары клиентов ── */}
          {Array.from({ length: CLIENT_COUNT }).map((_, i) => {
            const { left, top } = polarToPercent(i * (360 / CLIENT_COUNT))
            return (
              <div
                key={i}
                className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ left, top }}
              >
                <Image
                  src="/assets/services/customer.png"
                  alt="Customer"
                  width={48}
                  height={48}
                  className="rounded-full shadow-sm"
                />
              </div>
            )
          })}

          {/* ── «Пузырьки» продаж ── */}
          <AnimatePresence>
            {bubbles.map(({ id, angle, amount }) => {
              const { left, top } = polarToPercent(angle)
              return (
                <motion.div
                  key={id}
                  className="absolute z-30 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold shadow"
                  style={{ left, top }}
                  initial={{ y: 0, opacity: 1, scale: 1 }}
                  animate={{ y: -30, opacity: 0, scale: 1.2 }}
                  transition={{ duration: 1.5 }}
                >
                  +${amount.toFixed(2)}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* ── Итог по продажам ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 bg-gradient-to-r from-teal to-darkBlue text-white px-6 py-3 rounded-xl shadow-lg text-xl font-semibold"
        >
          Total Sales: ${total.toFixed(2)}
        </motion.div>
      </div>

      {/* ── Правая: текст ── */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-3">
        <h3 className="text-2xl md:text-3xl font-bold text-darkBlue">3. Connecting</h3>
        <p className="text-gray-600 leading-relaxed">
          We deliver highly motivated, purchase-ready users straight to your
          comparison pages, boosting your lead quality and conversion.
        </p>
      </div>
    </div>
  )
}
