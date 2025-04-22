// src/components/comparison/ConnectingStep.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'

export default function ConnectingStep() {
  const ref = useRef<HTMLDivElement>(null)
  const active = useInView(ref, { margin: '-50% 0px -50% 0px' })

  const CLIENT_COUNT = 6
  const PURCHASE_AMOUNTS = [9.99, 19.99, 29.99, 39.99, 49.99]

  const [bubbles, setBubbles] = useState<
    { id: number; angle: number; amount: number }[]
  >([])
  const [total, setTotal] = useState(0)
  const nextId = useRef(0)

  useEffect(() => {
    if (!active) return
    const timer = setInterval(() => {
      const id = nextId.current++
      const angle = (id % CLIENT_COUNT) * (360 / CLIENT_COUNT)
      const amount =
        PURCHASE_AMOUNTS[
          Math.floor(Math.random() * PURCHASE_AMOUNTS.length)
        ]

      setBubbles((arr) => [...arr, { id, angle, amount }])
      setTotal((t) => +(t + amount).toFixed(2))

      setTimeout(() => {
        setBubbles((arr) => arr.filter((b) => b.id !== id))
      }, 1800)
    }, 2000)

    return () => clearInterval(timer)
  }, [active])

  const polarToPercent = (angleDeg: number, radius = 40) => {
    const rad = (angleDeg * Math.PI) / 180
    return {
      left: `${50 + Math.cos(rad) * radius}%`,
      top: `${50 + Math.sin(rad) * radius}%`,
    }
  }

  return (
    <div
      ref={ref}
      className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row gap-12 overflow-hidden"
    >
      {/* LEFT: circle + sales */}
      <div className="flex-1 flex flex-col items-center">
        <div className="relative w-full aspect-square">
          {/* center icon */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Image
              src="/assets/services/website.png"
              width={80}
              height={80}
              alt="Website"
              className="drop-shadow-lg"
            />
          </div>
          {/* dotted lines */}
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
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                />
              )
            })}
          </svg>
          {/* avatars */}
          {Array.from({ length: CLIENT_COUNT }).map((_, i) => {
            const { left, top } = polarToPercent(i * (360 / CLIENT_COUNT))
            return (
              <div
                key={i}
                className="absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ left, top }}
              >
                <Image
                  src="/assets/services/customer.png"
                  width={56}
                  height={56}
                  alt="Customer"
                  className="rounded-full shadow-md"
                />
              </div>
            )
          })}
          {/* bubbles */}
          <AnimatePresence>
            {bubbles.map(({ id, angle, amount }) => {
              const { left, top } = polarToPercent(angle)
              return (
                <motion.div
                  key={id}
                  className="absolute text-green-500 font-semibold bg-white px-2 py-1 rounded-full shadow-sm z-30"
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

        {/* Total Sales under the graphic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 bg-gradient-to-r from-teal to-darkBlue text-white px-8 py-4 rounded-2xl shadow-lg text-2xl font-semibold"
        >
          Total Sales: ${total.toFixed(2)}
        </motion.div>
      </div>

      {/* RIGHT: text */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4">
        <h3 className="text-3xl font-bold text-darkBlue">3. Connecting</h3>
        <p className="text-gray-600 leading-relaxed">
          We deliver highly motivated, purchase‑ready users straight to your
          comparison pages, boosting your lead quality and conversion.
        </p>
      </div>
    </div>
  )
}
