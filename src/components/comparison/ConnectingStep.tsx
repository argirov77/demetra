'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'

interface ConnectStep {
  id: number
  title: string
  description: string
}

export default function ConnectingStep({ id, title, description }: ConnectStep) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useInView(ref, { margin: '-50% 0px -50% 0px' })

  const [events, setEvents] = useState<
    { id: number; pos: { top: string; left: string }; amount: number }[]
  >([])
  const [total, setTotal] = useState(0)
  const nextId = useRef(0)

  // "Хаотичные" позиции, подкорректировал для мобильного
  const clientPositions = [
    { top: '12%', left: '10%' },
    { top: '20%', left: '75%' },
    { top: '40%', left: '15%' },
    { top: '55%', left: '60%' },
    { top: '70%', left: '30%' },
    { top: '65%', left: '85%' },
  ]
  const PURCHASE_AMOUNTS = [9.99, 19.99, 29.99, 39.99, 49.99]

  useEffect(() => {
    if (!active) return
    const timer = setInterval(() => {
      const idx = Math.floor(Math.random() * clientPositions.length)
      const amount = PURCHASE_AMOUNTS[Math.floor(Math.random() * PURCHASE_AMOUNTS.length)]
      const eid = nextId.current++
      setEvents(ev => [...ev, { id: eid, pos: clientPositions[idx], amount }])
      setTotal(t => +(t + amount).toFixed(2))
      // Убираем после 2s
      setTimeout(() => setEvents(ev => ev.filter(e => e.id !== eid)), 2000)
    }, 1800)
    return () => clearInterval(timer)
  }, [active])

  return (
    <div
      ref={ref}
      className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 relative"
      // убрали overflow-hidden --- теперь аватары не обрезаются
    >
      {/* Левая часть: сайт + клиенты + линии */}
      <div className="relative flex-1 h-64">
        {/* Центральный сайт */}
        <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2">
          <Image src="/assets/services/website.png" width={64} height={64} alt="Website" />
        </div>

        {/* Пунктирные линии */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {clientPositions.map((pos, i) => (
            <line
              key={i}
              x1={pos.left}
              y1={pos.top}
              x2="50%"
              y2="50%"
              stroke="#CBD5E1"
              strokeWidth={1}
              strokeDasharray="4 4"
            />
          ))}
        </svg>

        {/* Аватары клиентов */}
        {clientPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12"
            style={{ top: pos.top, left: pos.left }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.2, type: 'spring', stiffness: 300 }}
          >
            <Image
              src="/assets/services/customer.png"
              width={48}
              height={48}
              alt="Customer"
            />
          </motion.div>
        ))}

        {/* Всплывающие суммы */}
        <AnimatePresence>
          {events.map(({ id, pos, amount }) => (
            <motion.div
              key={id}
              className="absolute text-green-600 font-semibold"
              style={{ top: pos.top, left: pos.left }}
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -40, opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              +${amount.toFixed(2)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Правая часть: текст + Total Sales */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4">
        <h3 className="text-2xl font-bold">
          {id}. {title}
        </h3>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4 inline-block bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg text-xl font-semibold">
          Total Sales: ${total.toFixed(2)}
        </div>
      </div>
    </div>
  )
}
