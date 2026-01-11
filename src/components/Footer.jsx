import React from 'react'
import { cn } from '../utils'

export default function Footer() {
  return (
    <footer className="bg-coffee/80 border-t border-cream/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-amber mb-4">☕ Аромат</h3>
            <p className="text-cream/80">
              Кофейня с бронированием и меню в коричневых тонах
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream hover:text-amber">Главная</a></li>
              <li><a href="#menu" className="text-cream hover:text-amber">Меню</a></li>
              <li><a href="#reservation" className="text-cream hover:text-amber">Бронирование</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber mb-4">Контакты</h3>
            <p className="text-cream/80">ул. Кофейная, 123</p>
            <p className="text-cream/80">+7 (123) 456-78-90</p>
            <p className="text-cream/80">coffee@example.com</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cream/10 text-center text-cream/60">
          <p>© 2024 Кофейня Аромат. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}