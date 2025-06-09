import React from 'react';

const Features = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Возможности</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <h3 className="text-xl font-bold mb-4">Умный подбор</h3>
                        <p className="text-gray-300">Автоматическая проверка совместимости компонентов</p>
                    </div>
                    <div className="text-center p-6">
                        <h3 className="text-xl font-bold mb-4">Лучшие цены</h3>
                        <p className="text-gray-300">Сравнение цен из разных магазинов</p>
                    </div>
                    <div className="text-center p-6">
                        <h3 className="text-xl font-bold mb-4">Сохранение сборок</h3>
                        <p className="text-gray-300">Сохраняйте и делитесь своими сборками</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;