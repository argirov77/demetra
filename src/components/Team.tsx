'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

interface TeamMember {
  photo: string
  name: string
  role: string
  telegram?: string
  email?: string
}

const teamMembers: TeamMember[] = [
  {
    photo: '/assets/team/Kateryna.jpg',
    name: 'Kateryna Shyrynian',
    role: 'CEO',
    email: 'ks@demetramedia.com',
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
    <section id="team" className="relative bg-gray-50 py-20 overflow-hidden">
      {/* decorative diagonals */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full bg-teal opacity-10 transform rotate-12 origin-top-right pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-2/3 h-full bg-blue-800 opacity-5 transform -rotate-12 origin-bottom-left pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* section title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-block relative text-center font-poppins font-bold text-darkBlue text-3xl md:text-4xl mb-12"
        >
          <span className="text-darkBlue">Meet Our</span>{' '}
          <span className="text-teal">Team</span>
          <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-teal -translate-x-1/2 rounded-full" />
        </motion.h2>

        {/* one animation for the entire grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {teamMembers.map((member) => {
            const contactHref = member.telegram
              ? `https://t.me/${member.telegram}`
              : member.email
              ? `mailto:${member.email}`
              : undefined
            const isEmail = Boolean(member.email)

            return (
              <div
                key={member.name}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-transform p-6 flex flex-col items-center text-center"
              >
                {/* photo (clickable if contact link exists) */}
                {contactHref ? (
                  <a
                    href={contactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-36 h-36 mb-4 rounded-full overflow-hidden bg-teal-600 ring-4 ring-gray-50 transition-transform group-hover:scale-105"
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </a>
                ) : (
                  <div className="relative w-36 h-36 mb-4 rounded-full overflow-hidden bg-teal-600 ring-4 ring-gray-50">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </div>
                )}

                {/* name */}
                {contactHref ? (
                  <a
                    href={contactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-darkBlue hover:text-teal transition-colors mb-1"
                  >
                    {member.name}
                  </a>
                ) : (
                  <p className="text-xl font-semibold text-darkBlue mb-1">
                    {member.name}
                  </p>
                )}

                {/* role */}
                <p className="text-teal font-medium uppercase tracking-wide mb-3">
                  {member.role}
                </p>

                {/* bottom icon */}
                {contactHref && (
                  <a
                    href={contactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    {isEmail ? (
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="lg"
                        style={{ color: '#22d3ee' }}
                      />
                    ) : (
                      <Image
                        src="/assets/icons/telegram.svg"
                        alt="Telegram"
                        width={24}
                        height={24}
                      />
                    )}
                  </a>
                )}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
