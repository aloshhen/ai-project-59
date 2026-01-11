import React from 'react'
import { cn } from '../utils'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-coffee/80 border-b border-cream/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-amber">☕ Аромат</div>
        <div className="space-x-6">
          <a href="#" className="text-cream hover:text-amber transition-colors">Главная</a>
          <a href="#menu" className="text-cream hover:text-amber transition-colors">Меню</a>
          <a href="#reservation" className="text-cream hover:text-amber transition-colors">Бронирование</a>
        </div>
      </div>
    </nav>
  )
}