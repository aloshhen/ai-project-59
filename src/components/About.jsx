import React from 'react'
import { cn } from '../utils'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-amber">
          Как мы работаем
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center mr-4">
                  <span className="text-amber font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber mb-2">Выбор зерен</h3>
                  <p className="text-cream/80">
                    Мы тщательно отбираем зерна из лучших регионов мира, проверяя их качество и аромат
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center mr-4">
                  <span className="text-amber font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber mb-2">Обжарка</h3>
                  <p className="text-cream/80">
                    Ручная обжарка позволяет сохранить натуральные ароматы и создать идеальный вкус
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center mr-4">
                  <span className="text-amber font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber mb-2">Сервис</h3>
                  <p className="text-cream/80">
                    Наши бариста готовы подсказать и помочь в выборе напитка, подходящего именно вам
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src="https://source.unsplash.com/800x600/?coffee,barista"
              alt="Бариста в кофейне"
              className="rounded-3xl shadow-2xl shadow-amber/20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}