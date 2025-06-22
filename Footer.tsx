import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">SkillHub</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Надежная платформа для поиска квалифицированных мастеров. 
              Безопасно, быстро и с гарантией качества.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+375 29 123-45-67</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Для клиентов</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Как найти мастера</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Гарантии</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Система рейтингов</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Поддержка</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Для мастеров</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Стать мастером</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Правила платформы</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SkillHub. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}