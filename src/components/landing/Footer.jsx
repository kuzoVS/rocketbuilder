import React from 'react';
import { Rocket, Mail, Phone, MapPin, Github, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: 'Калькулятор', href: '/calculator' },
            { name: 'Тарифы', href: '/pricing' },
            { name: 'API', href: '/api' },
            { name: 'Мобильное приложение', href: '/mobile' }
        ],
        company: [
            { name: 'О нас', href: '/about' },
            { name: 'Карьера', href: '/careers' },
            { name: 'Пресс-центр', href: '/press' },
            { name: 'Партнеры', href: '/partners' }
        ],
        support: [
            { name: 'Справка', href: '/help' },
            { name: 'Контакты', href: '/contacts' },
            { name: 'Статус системы', href: '/status' },
            { name: 'Обратная связь', href: '/feedback' }
        ],
        legal: [
            { name: 'Политика конфиденциальности', href: '/privacy' },
            { name: 'Условия использования', href: '/terms' },
            { name: 'Лицензии', href: '/licenses' },
            { name: 'Cookies', href: '/cookies' }
        ]
    };

    const socialLinks = [
        { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com' },
        { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com' },
        { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com' },
        { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com' }
    ];

    return (
        <footer className="bg-slate-900 border-t border-white/10 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Main footer content */}
                <div className="py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Company info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75"></div>
                                    <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                                        <Rocket size={24} className="text-white" />
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        ROCKET BUILDER
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                                Создаем будущее сборки ПК с помощью передовых технологий ИИ.
                                Помогаем геймерам, разработчикам и энтузиастам собрать идеальный компьютер.
                            </p>

                            {/* Contact info */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Mail className="w-4 h-4" />
                                    <span>support@rocketbuilder.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Phone className="w-4 h-4" />
                                    <span>+7 (495) 123-45-67</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <MapPin className="w-4 h-4" />
                                    <span>Москва, Россия</span>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="flex items-center gap-4 mt-6">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="text-gray-400 group-hover:text-white transition-colors">
                                            {social.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links sections */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
                            <div>
                                <h3 className="text-white font-semibold mb-4">Продукт</h3>
                                <ul className="space-y-3">
                                    {footerLinks.product.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold mb-4">Компания</h3>
                                <ul className="space-y-3">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold mb-4">Поддержка</h3>
                                <ul className="space-y-3">
                                    {footerLinks.support.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="py-8 border-t border-white/10">
                    <div className="max-w-md mx-auto text-center">
                        <h3 className="text-xl font-semibold mb-2">Подписка на новости</h3>
                        <p className="text-gray-400 mb-4">
                            Получайте уведомления о новых функциях и скидках
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Ваш email"
                                className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                            />
                            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:shadow-lg transition-shadow">
                                Подписаться
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="py-6 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Rocket Builder. Все права защищены.
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            {footerLinks.legal.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;