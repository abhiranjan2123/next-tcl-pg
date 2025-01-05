'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Calendar, Mail, Phone, User, Building2 } from 'lucide-react'

const destinations = [
  {
    name: 'Lalbhagh, Bengaluru',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80',
  },
  {
    name: 'BTM, Bengaluru',
    image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Koramangala, Bengaluru',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
]

const roomTypes = [
  'Single Sharing',
  'Double Sharing',
]

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: 'Deluxe Single',
    dateTime: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert('Booking successful! We will contact you shortly.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        roomType: 'Single Sharing',
        dateTime: ''
      })
    } catch (error) {
      alert('Something went wrong. Please try again.')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative min-h-[100dvh] bg-primary mt-16 rounded-md m-2">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Luxury interior"
          layout="fill"
          objectFit="cover"
          className="opacity-40 rounded-md"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 min-h-[100dvh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Book A Perfect Accommodation
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
            We understand that comfort and convenience are key when choosing the right place to stay. Discover a selection of well-appointed paying guest accommodations, designed to offer a welcoming and hassle-free living experience.
            </p>
          </motion.div>

          {/* Right Column - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Book your stay</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <User className="text-primary w-5 h-5 shrink-0" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="flex-1 p-2 border-b border-gray-300 focus:border-primary outline-none bg-transparent"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-primary w-5 h-5 shrink-0" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                      className="flex-1 p-2 border-b border-gray-300 focus:border-primary outline-none bg-transparent"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-primary w-5 h-5 shrink-0" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      required
                      className="flex-1 p-2 border-b border-gray-300 focus:border-primary outline-none bg-transparent"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <Building2 className="text-primary w-5 h-5 shrink-0" />
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="flex-1 p-2 border-b border-gray-300 focus:border-primary outline-none bg-transparent w-full"
                      required
                    >
                      {roomTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="text-primary w-5 h-5 shrink-0" />
                    <input
                      type="datetime-local"
                      name="dateTime"
                      value={formData.dateTime}
                      onChange={handleInputChange}
                      required
                      className="flex-1 p-2 border-b border-gray-300 focus:border-primary outline-none bg-transparent w-full"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary transition-colors duration-300 relative mt-6"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    'Book Now'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Destinations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
              >
                <div className="relative h-48 sm:h-36">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-semibold">{destination.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

