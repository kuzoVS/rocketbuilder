import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Menu, X, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { user, login, logout } = useAuth();

    const isLanding = location.pathname === '/';

    const navItems = [
        { path: '/', label: 'Главная' },
        { path: '/calculator', label: 'Калькулятор' },
        { path: '/pricing', label: 'Тарифы' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isLanding
                ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10'
                : 'bg-slate-900 border-b border-white/20'
        }`}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <Settings size={28} className="text-blue-400" />
                    <span className="text-xl font-bold">PC Builder Pro</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`hover:text-blue-400 transition-colors ${
                                location.pathname === item.path ? 'text-blue-400' : ''
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {user ? (
                        <div className="flex items-center gap-4">
                            <Link
                                to="/profile"
                                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                            >
                                <User size={20} />
                                {user.name}
                            </Link>
                            <button
                                onClick={logout}
                                className="bg-red-500/20 border border-red-500/50 px-4 py-2 rounded-xl hover:bg-red-500/30 transition-colors"
                            >
                                Выйти
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={login}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-xl hover:scale-105 transition-transform"
                        >
                            Войти
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-800 border-t border-white/10">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`block hover:text-blue-400 transition-colors ${
                                    location.pathname === item.path ? 'text-blue-400' : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        {user ? (
                            <div className="space-y-2">
                                <Link
                                    to="/profile"
                                    className="block hover:text-blue-400 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Профиль
                                </Link>
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsMenuOpen(false);
                                    }}
                                    className="w-full text-left text-red-400 hover:text-red-300 transition-colors"
                                >
                                    Выйти
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => {
                                    login();
                                    setIsMenuOpen(false);
                                }}
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-xl"
                            >
                                Войти
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
