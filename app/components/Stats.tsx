'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  {
    value: 25,
    suffix: '+',
    description: 'We provide an unparalleled stay with world-class amenities and a supportive community.'
  },
  {
    value: 99,
    suffix: '%',
    description: 'Our customers love us! With a 99% satisfaction rate, we pride ourselves on providing exceptional service.'
  },
  {
    value: 100,
    suffix: '+',
    description: 'Join the many women who rely on us for their home away from home, where luxury meets convenience.'
  }
]

const Counter = ({ value = 0 , suffix="", duration = 2 }) => {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const inView = useInView(nodeRef, { once: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      const incrementTime = duration * 1000 / end
      const counter = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(counter)
      }, incrementTime)

      return () => clearInterval(counter)
    }
  }, [value, duration, inView])

  return (
    <span ref={nodeRef} className="text-6xl md:text-7xl font-bold text-primary">
      {count}{suffix}
    </span>
  )
}

const Stats = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-4 text-gray-600 text-lg">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

