import React from 'react';
import { Check, Crown, Rocket, Star } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Базовый",
            price: "Бесплатно",
            popular: false,
            icon: <Star className="w-6 h-6" />,
            color: "from-gray-600 to-gray-700",
            borderColor: "border-gray-600/50",
            features: [
                "До 3 сборок",
                "Базовая проверка совместимости",
                "Сравнение цен из 10 магазинов",
                "Базовые рекомендации",
                "Сохранение сборок"
            ]
        },
        {
            name: "Про",
            price: "299₽",
            period: "/мес",
            popular: true,
            icon: <Rocket className="w-6 h-6" />,
            color: "from-blue-500 to-purple-500",
            borderColor: "border-blue-500",
            features: [
                "Неограниченное количество сборок",
                "Расширенная проверка совместимости",
                "Сравнение цен из 50+ магазинов",
                "Уведомления о снижении цен",
                "AI-рекомендации компонентов",
                "Приоритетная поддержка",
                "Экспорт списка покупок"
            ]
        },
        {
            name: "Бизнес",
            price: "999₽",
            period: "/мес",
            popular: false,
            icon: <Crown className="w-6 h-6" />,
            color: "from-purple-500 to-pink-500",
            borderColor: "border-purple-500/50",
            features: [
                "Все функции тарифа Про",
                "API доступ для интеграций",
                "Белый лейбл решение",
                "Персональный менеджер",
                "Кастомные интеграции",
                "SLA 99.9% uptime",
                "Корпоративная поддержка 24/7"
            ]
        }
    ];

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Тарифы
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Выберите тарифный план, который подходит именно вам
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-1">
                        <button className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold">
                            Месяц
                        </button>
                        <button className="px-6 py-2 rounded-lg text-gray-400 hover:text-white transition-colors">
                            Год <span className="text-green-400 text-sm ml-1">-20%</span>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative group ${
                                plan.popular
                                    ? 'transform scale-105 z-10'
                                    : 'hover:scale-105'
                            } transition-all duration-300`}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        Популярный
                                    </div>
                                </div>
                            )}

                            <div className={`
                                relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full
                                border-2 ${plan.borderColor} 
                                ${plan.popular ? 'shadow-2xl shadow-blue-500/20' : 'hover:shadow-xl'}
                                transition-all duration-300
                            `}>
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 rounded-2xl`}></div>

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="text-center mb-8">
                                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} mb-4`}>
                                            {plan.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                        <div className="flex items-baseline justify-center">
                                            <span className="text-4xl font-bold">{plan.price}</span>
                                            {plan.period && (
                                                <span className="text-gray-400 ml-1">{plan.period}</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <div className="flex-shrink-0">
                                                    <Check className="w-5 h-5 text-green-400" />
                                                </div>
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <button className={`
                                        w-full py-4 rounded-xl font-semibold transition-all duration-300
                                        ${plan.popular
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25'
                                        : 'border border-white/20 text-white hover:bg-white/10'
                                    }
                                    `}>
                                        {plan.price === "Бесплатно" ? "Начать бесплатно" : "Выбрать план"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom info */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-4">
                        Все тарифы включают 14-дневный бесплатный пробный период
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>Без скрытых платежей</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>Отмена в любое время</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>30-дневная гарантия возврата</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;