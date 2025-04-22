'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    icon: '/assets/icons/analysis.png',
    title: 'Analysis & Strategy',
    description: 'We analyze your audience and develop a custom, data-driven strategy.',
  },
  {
    icon: '/assets/icons/traffic.png',
    title: 'Traffic Generation',
    description: 'Attracting high-quality, targeted traffic using advanced marketing tactics.',
  },
  {
    icon: '/assets/icons/engagement.png',
    title: 'User Engagement',
    description: 'Engaging visitors through interactive content and optimized designs.',
  },
  {
    icon: '/assets/icons/conversion.png',
    title: 'Conversion & Revenue',
    description: 'Optimizing conversion paths to maximize revenue and ROI.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-poppins font-bold text-darkBlue text-center mb-12"
        >
          How It <span className="text-teal">Works</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-lightGray rounded-lg p-6 shadow-md flex flex-col items-center text-center relative"
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={70}
                height={70}
                className="mb-4"
              />
              <h3 className="text-lg font-bold mb-2 text-darkBlue">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
              {/* Здесь можно добавить SVG-стрелку, если требуется */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
