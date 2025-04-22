'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    photo: '/assets/team/member1.png',
    name: 'Alex Johnson',
    role: 'Founder & CEO',
  },
  {
    photo: '/assets/team/member2.png',
    name: 'Emily Davis',
    role: 'Head of Affiliate Marketing',
  },
  {
    photo: '/assets/team/member3.png',
    name: 'Michael Lee',
    role: 'Senior Web Developer',
  },
  {
    photo: '/assets/team/member4.png',
    name: 'Sophia Martinez',
    role: 'Marketing Specialist',
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-lightGray py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-poppins font-bold text-darkBlue text-center mb-12"
        >
          Meet Our <span className="text-teal">Team</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <Image
                src={member.photo}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-darkBlue">{member.name}</h3>
              <p className="text-teal">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
