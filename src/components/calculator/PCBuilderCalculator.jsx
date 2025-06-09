import React, { useState } from 'react';
import { Cpu, HardDrive, Zap, Monitor, Motherboard, Fan, Box, Plus, X, Check, AlertTriangle, DollarSign } from 'lucide-react';

const PCBuilderCalculator = () => {
    const [selectedComponents, setSelectedComponents] = useState({});
    const [activeCategory, setActiveCategory] = useState('cpu');

    const categories = [
        { id: 'cpu', name: 'Процессор', icon: <Cpu className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
        { id: 'motherboard', name: 'Материнская плата', icon: <Motherboard className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
        { id: 'ram', name: 'Оперативная память', icon: <HardDrive className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
        { id: 'gpu', name: 'Видеокарта', icon: <Monitor className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
        { id: 'storage', name: 'Накопитель', icon: <HardDrive className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' },
        { id: 'psu', name: 'Блок питания', icon: <Zap className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
        { id: 'cooler', name: 'Охлаждение', icon: <Fan className="w-5 h-5" />, color: 'from-cyan-500 to-blue-500' },
        { id: 'case', name: 'Корпус', icon: <Box className="w-5 h-5" />, color: 'from-gray-500 to-slate-500' }
    ];

    const sampleComponents = {
        cpu: [
            { id: 1, name: 'Intel Core i7-13700K', price: 45999, rating: 4.8, socket: 'LGA1700', cores: 16, threads: 24 },
            { id: 2, name: 'AMD Ryzen 7 7700X', price: 42999, rating: 4.7, socket: 'AM5', cores: 8, threads: 16 },
            { id: 3, name: 'Intel Core i5-13600K', price: 32999, rating: 4.6, socket: 'LGA1700', cores: 14, threads: 20 }
        ],
        gpu: [
            { id: 1, name: 'NVIDIA RTX 4070 Ti', price: 89999, rating: 4.9, memory: '12GB GDDR6X', performance: 'High' },
            { id: 2, name: 'AMD RX 7800 XT', price: 69999, rating: 4.7, memory: '16GB GDDR6', performance: 'High' },
            { id: 3, name: 'NVIDIA RTX 4060 Ti', price: 54999, rating: 4.5, memory: '8GB GDDR6', performance: 'Medium' }
        ]
    };

    const totalPrice = Object.values(selectedComponents).reduce((sum, component) => sum + (component?.price || 0), 0);
    const completedComponents = Object.keys(selectedComponents).length;
    const totalComponents = categories.length;
    const progress = (completedComponents / totalComponents) * 100;

    const handleComponentSelect = (categoryId, component) => {
        setSelectedComponents(prev => ({
            ...prev,
            [categoryId]: component
        }));
    };

    const removeComponent = (categoryId) => {
        setSelectedComponents(prev => {
            const newState = { ...prev };
            delete newState[categoryId];
            return newState;
        });
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0
        }).format(price);
    };

    return (
        <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Header */}
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Калькулятор сборки ПК
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Подберите идеальную конфигурацию компьютера с проверкой совместимости и лучшими ценами
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="max-w-4xl mx-auto mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-400">Прогресс сборки</span>
                        <span className="text-sm text-gray-400">{completedComponents}/{totalComponents}</span>
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {/* Sidebar - Categories */}
                    <div className="lg:col-span-1">
                        <div className="glass rounded-2xl p-6 sticky top-24">
                            <h3 className="text-lg font-semibold mb-4">Компоненты</h3>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`
                                            w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300
                                            ${activeCategory === category.id
                                            ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400'
                                            : 'hover:bg-white/5 text-gray-400 hover:text-white'
                                        }
                                        `}
                                    >
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                                            {category.icon}
                                        </div>
                                        <div className="flex-1 text-left">
                                            <div className="text-sm font-medium">{category.name}</div>
                                            {selectedComponents[category.id] && (
                                                <div className="text-xs text-green-400">✓ Выбран</div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Build Summary */}
                            <div className="mt-8 p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <DollarSign className="w-5 h-5 text-green-400" />
                                    <span className="font-semibold">Общая стоимость</span>
                                </div>
                                <div className="text-2xl font-bold text-green-400">
                                    {formatPrice(totalPrice)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="glass rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold">
                                    {categories.find(c => c.id === activeCategory)?.name}
                                </h2>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-400">Найдено:</span>
                                    <span className="text-sm font-semibold">
                                        {sampleComponents[activeCategory]?.length || 0} товаров
                                    </span>
                                </div>
                            </div>

                            {/* Components List */}
                            <div className="space-y-4">
                                {sampleComponents[activeCategory]?.map((component) => (
                                    <div
                                        key={component.id}
                                        className="card card-hover p-6 relative overflow-hidden"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold mb-2">{component.name}</h3>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                                                    {component.socket && (
                                                        <span>Сокет: {component.socket}</span>
                                                    )}
                                                    {component.cores && (
                                                        <span>Ядра: {component.cores}</span>
                                                    )}
                                                    {component.memory && (
                                                        <span>Память: {component.memory}</span>
                                                    )}
                                                    {component.performance && (
                                                        <span>Производительность: {component.performance}</span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="text-xl font-bold text-green-400">
                                                        {formatPrice(component.price)}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <div className="flex">
                                                            {[...Array(5)].map((_, i) => (
                                                                <div
                                                                    key={i}
                                                                    className={`w-3 h-3 ${
                                                                        i < Math.floor(component.rating)
                                                                            ? 'text-yellow-400'
                                                                            : 'text-gray-600'
                                                                    }`}
                                                                >
                                                                    ★
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <span className="text-sm text-gray-400">
                                                            {component.rating}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                {selectedComponents[activeCategory]?.id === component.id ? (
                                                    <button
                                                        onClick={() => removeComponent(activeCategory)}
                                                        className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                                                    >
                                                        <X className="w-4 h-4" />
                                                        Убрать
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => handleComponentSelect(activeCategory, component)}
                                                        className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/50 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                        Выбрать
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )) || (
                                    <div className="text-center py-12">
                                        <div className="text-gray-400 mb-4">
                                            Компоненты для этой категории в разработке
                                        </div>
                                        <button className="btn-primary">
                                            Уведомить о появлении
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Selected Components */}
                    <div className="lg:col-span-1">
                        <div className="glass rounded-2xl p-6 sticky top-24">
                            <h3 className="text-lg font-semibold mb-4">Выбранные компоненты</h3>

                            {Object.keys(selectedComponents).length === 0 ? (
                                <div className="text-center py-8 text-gray-400">
                                    <Box className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                    <p>Компоненты не выбраны</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {Object.entries(selectedComponents).map(([categoryId, component]) => {
                                        const category = categories.find(c => c.id === categoryId);
                                        return (
                                            <div key={categoryId} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                                                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                                                    {category.icon}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-xs text-gray-400">{category.name}</div>
                                                    <div className="text-sm font-medium truncate">{component.name}</div>
                                                    <div className="text-xs text-green-400">{formatPrice(component.price)}</div>
                                                </div>
                                                <button
                                                    onClick={() => removeComponent(categoryId)}
                                                    className="p-1 hover:bg-red-500/20 rounded text-red-400 transition-colors"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Compatibility Check */}
                            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span className="text-sm font-semibold text-green-400">Совместимость</span>
                                </div>
                                <p className="text-xs text-gray-400">
                                    Все выбранные компоненты совместимы между собой
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="mt-6 space-y-3">
                                <button className="w-full btn-primary">
                                    Сохранить сборку
                                </button>
                                <button className="w-full btn-secondary">
                                    Поделиться
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PCBuilderCalculator;