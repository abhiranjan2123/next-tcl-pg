'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What amenities are included in the accommodation?",
    answer: "Our accommodations include high-speed Wi-Fi, fully equipped kitchens, laundry facilities, and access to common areas such as lounges and co-working spaces."
  },
  {
    question: "Is there a minimum stay requirement?",
    answer: "Our minimum stay requirement is typically one month, but this can vary depending on the specific property and time of year. Please contact us for more details."
  },
  {
    question: "Are utilities included in the rent?",
    answer: "Yes, all utilities including electricity, water, and internet are included in the monthly rent for your convenience."
  },
  {
    question: "Is parking available?",
    answer: "Parking availability varies by location. Some of our properties offer on-site parking, while others may have nearby parking options. Please check with us for specific details about your chosen accommodation."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy allows for a full refund if cancelled at least 30 days before the check-in date. Cancellations made within 30 days of the check-in date may be subject to a partial refund. Please refer to our terms and conditions for more details."
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-[#fffef2]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-100 rounded-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-4 rounded-b-lg"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

