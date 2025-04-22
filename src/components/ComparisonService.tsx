// src/components/ComparisonService.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'

// ——— Data interfaces ———
interface SearchStep {
  id: number
  title: string
  description: string
  query: string
  results?: string[]
}

interface ConnectStep {
  id: number
  title: string
  description: string
}

// ——— Step definitions ———
const identifying: SearchStep = {
  id: 1,
  title: 'Identifying',
  description:
    "We perform an in‑depth audit of search behavior to uncover exactly what your potential customers are looking for and why.",
  query: 'best language learning services',
}

const targeting: SearchStep = {
  id: 2,
  title: 'Targeting',
  description:
    "We craft and deploy content that captures the highest‑intent search segments and steers them straight to your comparison page.",
  query: 'top 10 background check services',
  results: [
    'Top 10 background check services',
    'Background check service reviews',
    'Best background check website',
  ],
}

const connecting: ConnectStep = {
  id: 3,
  title: 'Connecting',
  description:
    "We deliver highly motivated, purchase‑ready users straight to your comparison pages, boosting your lead quality and conversion.",
}

// ——— Hook to detect when a step is centered in viewport ———
function useStepActive() {
  const ref = useRef<HTMLDivElement>(null)
  const active = useInView(ref, { margin: '-50% 0px -50% 0px' })
  return { ref, active }
}

// ——— Main component ———
export default function ComparisonService() {
  return (
    <section className="bg-gray-50 py-24 space-y-32">
      <IdentifyingStep {...identifying} />
      <TargetingStep {...targeting} />
      <ConnectingStep {...connecting} />
    </section>
  )
}

// ——— 1. Identifying ———
function IdentifyingStep({ title, description, query }: SearchStep) {
  const { ref, active } = useStepActive()
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (!active) {
      setTyped('')
      return
    }
    let i = 0
    const typeNext = () => {
      if (i <= query.length) {
        setTyped(query.slice(0, i))
        i++
        setTimeout(typeNext, 100 + Math.random() * 50)
      }
    }
    typeNext()
  }, [active, query])

  return (
    <div
      ref={ref}
      className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8"
    >
      <BrowserMockup>
        <TypedSearch query={typed} />
      </BrowserMockup>
      <StepText number={1} title={title} description={description} />
    </div>
  )
}

// ——— 2. Targeting ———
function TargetingStep({
  title,
  description,
  query,
  results = [],
}: SearchStep) {
  const { ref, active } = useStepActive()
  const [typed, setTyped] = useState('')
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (!active) {
      setTyped('')
      setShowResults(false)
      return
    }
    let i = 0
    const typeNext = () => {
      if (i <= query.length) {
        setTyped(query.slice(0, i))
        i++
        setTimeout(typeNext, 100 + Math.random() * 50)
      } else {
        setTimeout(() => setShowResults(true), 500)
      }
    }
    typeNext()
  }, [active, query])

  return (
    <div
      ref={ref}
      className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8"
    >
      <BrowserMockup>
        <TypedSearch query={typed} />
        <AnimatePresence>
          {showResults && (
            <motion.ul
              className="mt-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {results.map((item, idx) => (
                <motion.li
                  key={idx}
                  className={`p-3 rounded-lg shadow ${
                    idx === 0 ? 'bg-green-500 text-white' : 'bg-gray-100'
                  }`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.2 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </BrowserMockup>
      <StepText number={2} title={title} description={description} />
    </div>
  )
}

// ——— 3. Connecting ———
function ConnectingStep({ title, description }: ConnectStep) {
  const { ref, active } = useStepActive()
  const [events, setEvents] = useState<
    { id: number; pos: { top: string; left: string }; amount: number }[]
  >([])
  const [total, setTotal] = useState(0)
  const nextId = useRef(0)

  const clientPositions = [
    { top: '15%', left: '20%' },
    { top: '25%', left: '75%' },
    { top: '55%', left: '15%' },
    { top: '45%', left: '60%' },
    { top: '75%', left: '35%' },
    { top: '65%', left: '85%' },
  ]
  const PURCHASE_AMOUNTS = [9.99, 19.99, 29.99, 39.99, 49.99]

  useEffect(() => {
    if (!active) return
    const timer = setInterval(() => {
      const idx = Math.floor(Math.random() * clientPositions.length)
      const amount =
        PURCHASE_AMOUNTS[
          Math.floor(Math.random() * PURCHASE_AMOUNTS.length)
        ]
      const id = nextId.current++
      setEvents((ev) => [...ev, { id, pos: clientPositions[idx], amount }])
      setTotal((t) => parseFloat((t + amount).toFixed(2)))
      setTimeout(() => {
        setEvents((ev) => ev.filter((e) => e.id !== id))
      }, 2000)
    }, 1800)
    return () => clearInterval(timer)
  }, [active])

  return (
    <div
      ref={ref}
      className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden"
    >
      <div className="relative flex-1 h-64">
        {/* central website icon */}
        <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/assets/services/website.png"
            width={64}
            height={64}
            alt="Website"
          />
        </div>

        {/* dashed lines */}
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

        {/* client icons */}
        {clientPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-12 h-12"
            style={{ top: pos.top, left: pos.left }}
          >
            <Image
              src="/assets/services/customer.png"
              width={48}
              height={48}
              alt="Customer"
            />
          </div>
        ))}

        {/* floating purchase amounts */}
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

      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4">
        <h3 className="text-2xl font-bold">3. {title}</h3>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4 inline-block bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg text-xl font-semibold">
          Total Sales: ${total.toFixed(2)}
        </div>
      </div>
    </div>
  )
}

// ——— Browser mockup wrapper for steps 1 & 2 ———
function BrowserMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex-1 bg-gray-100 rounded-lg shadow-inner overflow-hidden">
      <div className="h-8 bg-gray-200 flex items-center px-4 space-x-2">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

// ——— Typing search bar ———
function TypedSearch({ query }: { query: string }) {
  return (
    <div className="bg-white rounded-full border flex items-center px-4 py-2 space-x-2">
      <Image
        src="/assets/services/google-icon.svg"
        width={20}
        height={20}
        alt="Google"
      />
      <motion.span
        key={query}
        className="overflow-hidden whitespace-nowrap flex-1 text-gray-800"
      >
        {query}
      </motion.span>
      <motion.span className="animate-pulse text-gray-400" aria-hidden>
        |
      </motion.span>
    </div>
  )
}

// ——— Step text (shared) ———
function StepText({
  number,
  title,
  description,
}: {
  number: number
  title: string
  description: string
}) {
  return (
    <div className="flex-1 space-y-2 text-center md:text-left">
      <h3 className="text-2xl font-bold">
        {number}. {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
