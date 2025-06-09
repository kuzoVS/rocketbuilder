import React from 'react';
import { Rocket, Zap, Star, ArrowRight } from 'lucide-react';

const Hero = ({ onStartBuilding }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20">
                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-grid-pattern"></div>
                </div>
            </div>

            <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                    <Zap size={16} className="text-yellow-400" />
                    <span className="text-sm text-blue-300">Новое поколение PC Builder</span>
                </div>

                {/* Main heading */}
                <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                        ROCKET
                    </span>
                    <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                        BUILDER
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
                    Собери идеальный игровой ПК с помощью нашего
                    <span className="text-blue-400 font-semibold"> AI-powered </span>
                    калькулятора совместимости
                </p>

                {/* Features list */}
                <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
                    {[
                        { icon: <Star className="w-4 h-4" />, text: "100% совместимость" },
                        { icon: <Zap className="w-4 h-4" />, text: "Лучшие цены" },
                        { icon: <Rocket className="w-4 h-4" />, text: "Быстрая сборка" }
                    ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-400">
                            <div className="text-blue-400">{feature.icon}</div>
                            {feature.text}
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={onStartBuilding}
                        className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Начать сборку
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>

                    <button className="px-8 py-4 rounded-2xl text-lg font-semibold border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
                        Посмотреть примеры
                    </button>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                    {[
                        { number: "50K+", label: "Собранных ПК" },
                        { number: "99.9%", label: "Совместимость" },
                        { number: "24/7", label: "Поддержка" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </section>
    );
};

export default Hero;