// src/components/comparison/ComparisonService.tsx
'use client'

import React from 'react'
import IdentifyingStep from './IdentifyingStep'
import TargetingStep   from './TargetingStep'
import ConnectingStep  from './ConnectingStep'

/** Описание шагов */
const identifying = {
  id: 1,
  title: 'Identifying',
  description:
    "We perform an in‑depth audit of search behavior to uncover exactly what your potential customers are looking for and why.",
  query: 'best language learning services',
}

const targeting = {
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

const connecting = {
  id: 3,
  title: 'Connecting',
  description:
    "We deliver highly motivated, purchase‑ready users straight to your comparison pages, boosting your lead quality and conversion.",
}

export default function ComparisonService() {
  return (
    <section className="bg-gray-50 py-24 space-y-32">
      {/* здесь спредим все поля нужного шага */}
      <IdentifyingStep {...identifying} />
      <TargetingStep   {...targeting}   />
      <ConnectingStep  {...connecting}  />
    </section>
  )
}
