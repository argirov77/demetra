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
  const active = useInView(ref, { margin: '-50% 0px -50% 0px' })
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (!active) {
      setTyped('')
      return
    }
    let i = 0
    const tick = () => {
      if (i <= query.length) {
        setTyped(query.slice(0, i))
        i++
        setTimeout(tick, 100 + Math.random() * 50)
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
        <TypedSearch query={typed} />
      </BrowserMockup>
      <StepText number={1} title={title} description={description} />
    </div>
  )
}

/** Рамка «браузера» */
function BrowserMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex-1 bg-gray-100 rounded-lg overflow-hidden">
      <div className="h-8 bg-gray-200 flex items-center px-4 space-x-2">
        <span className="w-3 h-3 bg-red-400 rounded-full" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
        <span className="w-3 h-3 bg-green-400 rounded-full" />
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

/** Анимация ввода */
function TypedSearch({ query }: { query: string }) {
  return (
    <div className="bg-white border rounded-full flex items-center px-4 py-2 space-x-2">
      <Image src="/assets/services/google-icon.svg" width={20} height={20} alt="Google" />
      <motion.span key={query} className="overflow-hidden whitespace-nowrap flex-1">
        {query}
      </motion.span>
      <motion.span className="animate-pulse text-gray-400">|</motion.span>
    </div>
  )
}

/** Текстовая часть шага */
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
      <h3 className="text-2xl font-bold">{number}. {title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
