'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    photo: '/assets/team/Kateryna.jpg',
    name: 'Kateryna Shyrynian',
    role: 'CEO',
    telegram: 'KS_TRF',
  },
  {
    photo: '/assets/team/Yaroslav.jpg',
    name: 'Yaroslav Strybets',
    role: 'Head of Affiliates',
    telegram: 'Yaroslav_DemetraMedia',
  },
  {
    photo: '/assets/team/Svetlana.jpg',
    name: 'Svetlana Kryukova',
    role: 'Head of Accounts',
    telegram: 'Svetlana_DemetraMedia',
  },
  {
    photo: '/assets/team/Alex.jpg',
    name: 'Oleksandr Strelchenko',
    role: 'Affiliate Manager',
    telegram: 'Alex_DemetraMedia',
  },
  {
    photo: '/assets/team/Anastasia.jpg',
    name: 'Anastasia Shuliak',
    role: 'Affiliate Manager',
    telegram: 'Anastasiia_DemetraMedia',
  },
  {
    photo: '/assets/team/Daniela.jpg',
    name: 'Daniella Ovcharenko',
    role: 'Account Manager',
    telegram: 'Daniella_DemetraMedia',
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 text-center mb-12 relative inline-block"
        >
          Meet Our{' '}
          <span className="text-blue-600">Team</span>
          <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-blue-600 -translate-x-1/2 rounded-full" />
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition p-6 flex flex-col items-center text-center"
            >
              {/* blue circle + photo fills it */}
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden bg-blue-600 ring-4 ring-blue-50">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <div className="w-10 h-px bg-gray-200 my-2" />
              <p className="text-blue-600 font-medium uppercase tracking-wide">
                {member.role}
              </p>
              <a
                href={`https://t.me/${member.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-gray-500 hover:text-blue-600 transition"
              >
                @{member.telegram}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
