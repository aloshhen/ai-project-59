import React from 'react'
import { cn } from '../utils'
import { Coffee, Sparkles, Utensils, Clock, Star, CoffeeBeans } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  return (
    <section className="py-24 bg-cream/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-amber">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-coffee/50 backdrop-blur-xl rounded-3xl p-8 border border-cream/10">
            <div className="w-16 h-16 rounded-2xl bg-amber/20 flex items-center justify-center mb-6">
              <Coffee className="w-8 h-8 text-amber" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-amber">Свежий кофе</h3>
            <p className="text-cream/80">
              Ручная обжарка и выбор лучших сортов из разных регионов мира
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-coffee/50 backdrop-blur-xl rounded-3xl p-8 border border-cream/10">
            <div className="w-16 h-16 rounded-2xl bg-amber/20 flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-amber" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-amber">Уникальные рецепты</h3>
            <p className="text-cream/80">
              Эксперименты с сочетаниями вкусов и ароматов, созданные нашими бариста
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-coffee/50 backdrop-blur-xl rounded-3xl p-8 border border-cream/10">
            <div className="w-16 h-16 rounded-2xl bg-amber/20 flex items-center justify-center mb-6">
              <Utensils className="w-8 h-8 text-amber" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-amber">Вкусные десерты</h3>
            <p className="text-cream/80">
              Домашние пирожные, тарталетки и другие сладкие изыски к вашему кофе
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}