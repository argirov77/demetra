'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TypedSearch({ query }: { query: string }) {
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
