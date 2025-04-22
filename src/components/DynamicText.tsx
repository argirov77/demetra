'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const keyPhrases = [
  'Innovative Solutions',
  'High Conversion Rates',
  'Cutting-Edge Strategies',
];

export default function DynamicText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % keyPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="inline-block text-teal font-bold"
      >
        {keyPhrases[index]}
      </motion.span>
    </AnimatePresence>
  );
}
