import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Отзывы</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white/10 p-6 rounded-xl">
                        <p className="mb-4">"Отличный сервис! Помог собрать идеальный ПК для игр."</p>
                        <div className="font-bold">- Алексей М.</div>
                    </div>
                    <div className="bg-white/10 p-6 rounded-xl">
                        <p className="mb-4">"Сэкономил много времени и денег благодаря этому калькулятору."</p>
                        <div className="font-bold">- Мария К.</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;