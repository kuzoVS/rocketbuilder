import React from 'react';

const Pricing = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Тарифы</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white/10 p-6 rounded-xl">
                        <h3 className="text-xl font-bold mb-4">Базовый</h3>
                        <p className="text-2xl font-bold mb-4">Бесплатно</p>
                        <ul className="space-y-2">
                            <li>✓ До 3 сборок</li>
                            <li>✓ Базовая совместимость</li>
                        </ul>
                    </div>
                    <div className="bg-blue-500/20 p-6 rounded-xl border border-blue-400">
                        <h3 className="text-xl font-bold mb-4">Про</h3>
                        <p className="text-2xl font-bold mb-4">299₽/мес</p>
                        <ul className="space-y-2">
                            <li>✓ Неограниченные сборки</li>
                            <li>✓ Расширенная совместимость</li>
                            <li>✓ Уведомления о ценах</li>
                        </ul>
                    </div>
                    <div className="bg-white/10 p-6 rounded-xl">
                        <h3 className="text-xl font-bold mb-4">Бизнес</h3>
                        <p className="text-2xl font-bold mb-4">999₽/мес</p>
                        <ul className="space-y-2">
                            <li>✓ Все функции Про</li>
                            <li>✓ API доступ</li>
                            <li>✓ Приоритетная поддержка</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;