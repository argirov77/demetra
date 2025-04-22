'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface SearchStep {
  title: string
  description: string
  query: string
}

export default function IdentifyingStep({ title, description, query }: SearchStep) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useInView(ref, { margin: '-40% 0px -40% 0px' })

  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!active) {
      setTyped('')
      setDone(false)
      return
    }
    let i = 0
    const tick = () => {
      if (i <= query.length) {
        setTyped(query.slice(0, i))
        i++
        // более естественная задержка
        setTimeout(tick, 80 + Math.random() * 80)
      } else {
        setDone(true)
      }
    }
    tick()
  }, [active, query])

  return (
    <div
      ref={ref}
      className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8"
    >
      <BrowserMockup>
        <TypedSearch query={typed} done={done} />
      </BrowserMockup>
      <StepText number={1} title={title} description={description} />
    </div>
  )
}

/** Фиксированное по размеру «окно браузера» */
function BrowserMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex-1 max-w-xs min-w-[300px] h-48 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
      {/* Топ‑бар */}
      <div className="h-8 bg-gray-200 flex items-center px-4 space-x-2">
        <span className="w-3 h-3 bg-red-400 rounded-full" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
        <span className="w-3 h-3 bg-green-400 rounded-full" />
      </div>
      <div className="p-6 flex items-center justify-center">{children}</div>
    </div>
  )
}

/** Поисковая строка с плавной анимацией расширения */
function TypedSearch({
  query,
  done,
}: {
  query: string
  done: boolean
}) {
  // ширина строке всегда фиксирована, чтобы не «прыгать»
  const containerWidth = 240
  return (
    <div className="relative">
      <motion.div
        className="bg-white border border-gray-300 rounded-full flex items-center pl-3 pr-4 py-2 overflow-hidden"
        style={{ width: containerWidth }}
        initial={{ width: 0 }}
        animate={{ width: containerWidth }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Image
          src="/assets/services/google-icon.svg"
          width={20}
          height={20}
          alt="Google"
        />
        <span className="ml-2 flex-1 text-gray-800 overflow-hidden whitespace-nowrap">
          {query}
        </span>
        {done && (
          <motion.span
            className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1.2,
            }}
          />
        )}
      </motion.div>
    </div>
  )
}

/** Общий текстовый блок шага */
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
    <div className="flex-1 space-y-4 text-center md:text-left">
      <h3 className="text-2xl font-bold">{number}. {title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
