import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Алексей Михайлов",
            role: "Геймер-энтузиаст",
            avatar: "👨‍💻",
            rating: 5,
            text: "Невероятно удобный сервис! Собрал мощный игровой ПК за час, все компоненты идеально совместимы. Экономия времени и нервов!",
            build: "RTX 4080 + i7-13700K",
            savings: "15,000₽"
        },
        {
            id: 2,
            name: "Мария Козлова",
            role: "3D-дизайнер",
            avatar: "👩‍🎨",
            rating: 5,
            text: "Как новичок в сборке ПК, я была в растерянности. Этот калькулятор стал моим спасением - все понятно и просто!",
            build: "RTX 4070 + Ryzen 7 7700X",
            savings: "12,500₽"
        },
        {
            id: 3,
            name: "Дмитрий Петров",
            role: "Стример",
            avatar: "🎮",
            rating: 5,
            text: "Отличные рекомендации по оптимизации! Получил максимальную производительность в рамках бюджета.",
            build: "RTX 4060 Ti + i5-13600K",
            savings: "8,000₽"
        },
        {
            id: 4,
            name: "Елена Волкова",
            role: "Разработчик",
            avatar: "👩‍💼",
            rating: 5,
            text: "Профессиональный подход к подбору компонентов. Собрала рабочую станцию мечты с учетом всех требований.",
            build: "RTX 4090 + i9-13900K",
            savings: "25,000₽"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Отзывы клиентов
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Более 50,000 довольных пользователей уже собрали свой идеальный ПК с нашей помощью
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
                            <div className="text-gray-400 text-sm">Собранных ПК</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-400 mb-2">4.9</div>
                            <div className="text-gray-400 text-sm">Средняя оценка</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                            <div className="text-gray-400 text-sm">Совместимость</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                            <div className="text-gray-400 text-sm">Поддержка</div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                        >
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Quote className="w-8 h-8 text-blue-400" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Testimonial text */}
                            <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors">
                                "{testimonial.text}"
                            </p>

                            {/* Build info */}
                            <div className="bg-white/5 rounded-lg p-4 mb-6 border border-white/10">
                                <div className="flex justify-between items-center text-sm">
                                    <div>
                                        <span className="text-gray-400">Сборка: </span>
                                        <span className="text-blue-400 font-medium">{testimonial.build}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400">Экономия: </span>
                                        <span className="text-green-400 font-medium">{testimonial.savings}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.name}</div>
                                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                                </div>
                            </div>

                            {/* Hover effect border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 transition-colors duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6">
                        Присоединяйтесь к тысячам довольных пользователей
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform shadow-lg">
                        Начать сборку бесплатно
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;