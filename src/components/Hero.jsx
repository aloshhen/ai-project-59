import React from 'react'
import { cn } from '../utils'
import { Coffee, Utensils, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-coffee via-cream to-coffee opacity-90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber to-coffee">
            ☕ Свежий кофе
            <span className="block">в уютной атмосфере</span>
          </h1>
          <p className="text-xl text-cream/80 mb-10">
            Наслаждайтесь ароматом ручной обжарки и вкусом, приготовленным с любовью
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#menu"
              className="px-8 py-4 bg-amber text-coffee rounded-3xl font-medium shadow-lg hover:shadow-amber/30 transition-all">
              Посмотреть меню
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#reservation"
              className="px-8 py-4 bg-cream/20 text-cream border border-cream/30 rounded-3xl font-medium hover:bg-cream/30 transition-all">
              Забронировать столик
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}