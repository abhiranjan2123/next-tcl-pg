'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const facilities = [
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Fully Equipped Gym",
    className: "col-span-1 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    alt: "Luxury Bedroom",
    className: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Cozy Reading Area",
    className: "col-span-1 row-span-1"
  }
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">About Us</h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  Welcome to The Cozy Luxe, where luxury meets comfort and convenience. We specialize in providing premium, fully-furnished accommodation designed exclusively for women who value sophistication, security, and style.
                </p>
                <p>
                  At The Cozy Luxe, we believe that a home away from home should be more than just a place to stay. That&apos;s why we&apos;ve meticulously crafted our spaces to combine elegance and functionality, ensuring our residents experience a lifestyle of unparalleled comfort.
                </p>
                <p>
                  Our commitment to excellence extends beyond just the physical space. We foster a vibrant community where like-minded women can connect, grow, and thrive together. From networking events to wellness programs, we create opportunities for our residents to build lasting relationships and create memorable experiences.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 auto-rows-[200px]"
            >
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility.alt}
                  className={`relative rounded-2xl overflow-hidden ${facility.className}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={facility.src}
                    alt={facility.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

