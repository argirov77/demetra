'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-darkBlue py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-poppins font-bold text-center mb-8"
        >
          Contact Us
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Форма обратной связи */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 md:w-1/2"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md border border-gray-300 text-darkBlue"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md border border-gray-300 text-darkBlue"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-md border border-gray-300 text-darkBlue"
              rows={4}
            />
            <button
              type="submit"
              className="bg-teal hover:bg-purple transition text-white px-6 py-3 rounded-md"
            >
              Send Message
            </button>
          </motion.form>
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2"
          >
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-2">Email: info@demetramedia.com</p>
            <p className="mb-2">Phone: +1 (555) 123-4567</p>
            <p className="mb-2">Address: 123 Marketing Ave, Suite 400, New York, USA</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-teal transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-teal transition-colors">Twitter</a>
              <a href="#" className="hover:text-teal transition-colors">Facebook</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
