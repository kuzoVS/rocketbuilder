import React from 'react';
import { Cpu, DollarSign, Save, Shield, Zap, Users } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "Умный подбор компонентов",
            description: "AI-алгоритм автоматически проверяет совместимость всех компонентов и предлагает оптимальные варианты",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Лучшие цены",
            description: "Мониторинг цен в реальном времени из 50+ магазинов. Уведомления о скидках и выгодных предложениях",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Save className="w-8 h-8" />,
            title: "Сохранение сборок",
            description: "Создавайте неограниченное количество сборок, делитесь ими с друзьями и получайте обратную связь",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Гарантия совместимости",
            description: "100% гарантия совместимости компонентов. Возмещение в случае ошибки нашего алгоритма",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Мгновенный расчет",
            description: "Производительность, энергопотребление и совместимость рассчитываются за миллисекунды",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Сообщество",
            description: "Присоединяйтесь к сообществу PC-энтузиастов, делитесь опытом и получайте советы",
            color: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Возможности
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Все что нужно для создания идеального ПК - от подбора компонентов до финальной сборки
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Gradient background on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                            {/* Icon */}
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6 text-white`}>
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>

                            {/* Hover effect border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform shadow-lg">
                        Узнать больше о возможностях
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Features;