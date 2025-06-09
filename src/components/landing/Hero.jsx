import React from 'react';

const Hero = ({ onStartBuilding }) => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ROCKET BUILDER
          </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                    Собери идеальный ПК с нашим калькулятором
                </p>
                <button
                    onClick={onStartBuilding}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform"
                >
                    Начать сборку
                </button>
            </div>
        </section>
    );
};

export default Hero;