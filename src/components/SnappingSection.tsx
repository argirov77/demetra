'use client'
import { ReactNode, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export function SnappingSection({
  id,
  children,
}: {
  id: string
  children: ReactNode
}) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { margin: '-50% 0px -50% 0px' })
  const controls = useAnimation()

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [inView, controls])

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.section>
  )
}
