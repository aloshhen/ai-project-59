import React from 'react'
import { cn } from '../utils'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-amber/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-coffee">
            Готовы попробовать?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-coffee/80 mb-10">
            Приходите в нашу кофейню и наслаждайтесь ароматом свежего кофе в уютной атмосфере
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#reservation"
            className="px-8 py-4 bg-coffee text-cream rounded-3xl font-medium shadow-lg hover:shadow-coffee/30 transition-all">
            Забронировать столик
          </motion.a>
        </div>
      </div>
    </section>
  )
}