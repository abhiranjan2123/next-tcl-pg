/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Bed, Bath, Briefcase, Box, Maximize} from 'lucide-react'
import Slider from 'react-slick'

const rooms = [
  { 
    name: 'Deluxe Single', 
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1617098900591-3f90928e8c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80'
    ],
    price: '₹25,000/month', 
    features: [
      { icon: Bed, text: 'Comfortable single bed' },
      { icon: Bath, text: 'Private bathroom' },
      { icon: Briefcase, text: 'Study desk' },
      { icon: Box, text: 'Ample storage' },
    ]
  },
  { 
    name: 'Premium Double', 
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80'
    ],
    price: '₹15,000/month', 
    features: [
      { icon: Bed, text: 'Queen-size bed' },
      { icon: Bath, text: 'En-suite bathroom' },
      { icon: Briefcase, text: 'Work area' },
      { icon: Maximize, text: 'Spacious layout' },
    ]
  },
]

const RoomsShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
  }

  return (
    <section id="rooms" className="py-10 bg-white">
      <div className="container mx-auto px-4">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Rooms</h2>
          <p className="text-xl text-gray-700">Diverse Living Options for Every Lifestyle</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Slider {...settings}>
                  {room.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative h-64">
                      <Image 
                        src={image} 
                        alt={`${room.name} - Image ${imgIndex + 1}`}
                        layout="fill" 
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                      />
                    </div>
                  ))}
                </Slider>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-semibold text-white mb-2">{room.name}</h3>
                  <p className="text-white font-medium">{room.price}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <feature.icon className="w-5 h-5 mr-3 text-primary" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-primary text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-primary transition-colors duration-200"
                >
                 <a href="#"> Book Now</a>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>   
      </div>
    </section>
  )
}

export default RoomsShowcase

