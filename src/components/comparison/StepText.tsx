'use client'

export default function StepText({
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
