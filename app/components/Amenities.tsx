'use client'

import { motion } from 'framer-motion'
import { Wifi, Shield, UtensilsCrossed, Dumbbell, Laptop, Flower2, Car, Tv } from 'lucide-react'

const amenities = [
  { 
    Icon: Wifi, 
    title: 'High-Speed Wi-Fi', 
    description: 'Stay connected with our lightning-fast internet',
    animation: {
      rotate: [0, 90, 0],
      scale: [1, 1.2, 1]
    }
  },
  { 
    Icon: Shield, 
    title: '24/7 Security', 
    description: 'Feel safe with round-the-clock security measures',
    animation: {
      scale: [1, 1.2, 1],
      borderRadius: ["20%", "50%", "20%"]
    }
  },
  { 
    Icon: UtensilsCrossed, 
    title: 'Gourmet Kitchen', 
    description: 'Cook up a storm in our fully-equipped kitchen',
    animation: {
      rotate: [0, 15, -15, 0],
      x: [0, 5, -5, 0]
    }
  },
  { 
    Icon: Dumbbell, 
    title: 'Fitness Center', 
    description: 'Stay fit with our state-of-the-art gym equipment',
    animation: {
      y: [0, -10, 0],
      scale: [1, 1.1, 1]
    }
  },
  { 
    Icon: Laptop, 
    title: 'Co-working Space', 
    description: 'Work comfortably in our dedicated workspace',
    animation: {
      rotateY: [0, 360],
      scale: [1, 1.1, 1]
    }
  },
  { 
    Icon: Flower2, 
    title: 'Garden Terrace', 
    description: 'Relax in our beautiful outdoor garden area',
    animation: {
      rotate: [0, 45, 0],
      scale: [1, 1.2, 1]
    }
  },
  { 
    Icon: Car, 
    title: 'Parking Space', 
    description: 'Convenient parking available for residents',
    animation: {
      x: [0, 10, 0],
      scale: [1, 1.1, 1]
    }
  },
  { 
    Icon: Tv, 
    title: 'Entertainment Lounge', 
    description: 'Unwind in our cozy entertainment area',
    animation: {
      scale: [1, 1.15, 1],
      opacity: [1, 0.8, 1]
    }
  },
]

const Amenities = () => {
  return (
    <section id="amenities" className="py-10 bg-[#fffef2]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Standard Amenities</h2>
          <p className="text-xl text-gray-700">Experience luxury living with our premium amenities</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative flex justify-center mb-6">
                <motion.div
                  className="text-primary w-12 h-12 flex items-center justify-center"
                  whileHover={amenity.animation}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <amenity.Icon size={32} strokeWidth={1.5} />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-primary/5 rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.h3 
                className="text-xl font-semibold mb-2 text-gray-800 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {amenity.title}
              </motion.h3>
              <p className="text-gray-600 text-center">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities

