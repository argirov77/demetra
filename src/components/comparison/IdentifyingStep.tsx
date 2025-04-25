// src/components/comparison/IdentifyingStep.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface SearchStep {
  title: string
  description: string
  query: string
}

export default function IdentifyingStep({
  title,
  description,
  query,
}: SearchStep) {
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
      className="relative overflow-hidden bg-white rounded-2xl shadow-lg"
    >
      {/* фоновые диагонали */}
      <div
        className="absolute inset-0 bg-teal-100 opacity-20 transform -rotate-12 origin-bottom-left pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-darkBlue/10 opacity-10 transform rotate-12 origin-top-right pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Окно-браузер */}
        <BrowserMockup>
          <TypedSearch query={typed} done={done} />
        </BrowserMockup>

        {/* Текст */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-poppins font-bold text-darkBlue">
            1. {title}
          </h3>
          <p className="text-gray-700 text-base md:text-lg">{description}</p>
        </div>
      </div>
    </div>
  )
}

function BrowserMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden shadow-inner max-w-[360px] w-full">
      {/* верхняя панель */}
      <div className="h-8 bg-gray-200 flex items-center px-4 space-x-2">
        <span className="w-3 h-3 bg-red-400 rounded-full" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
        <span className="w-3 h-3 bg-green-400 rounded-full" />
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

function TypedSearch({
  query,
  done,
}: {
  query: string
  done: boolean
}) {
  return (
    <div className="relative w-full">
      {/* зафиксированная ширина, не анимируемая */}
      <div className="w-full bg-white border border-gray-300 rounded-full flex items-center px-4 py-2 overflow-hidden">
        <Image
          src="/assets/services/google-icon.svg"
          width={20}
          height={20}
          alt="Google"
        />
        <span className="ml-3 flex-1 text-gray-800 truncate">
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
      </div>
    </div>
  )
}
