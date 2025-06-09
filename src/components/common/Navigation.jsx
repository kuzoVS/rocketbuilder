import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Menu, X, User, Rocket } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { user, login, logout } = useAuth();

    const isLanding = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { path: '/', label: 'Главная' },
        { path: '/calculator', label: 'Калькулятор' },
        { path: '/pricing', label: 'Тарифы' },
    ];

    return (
        <nav className={`
            fixed top-0 w-full z-50 transition-all duration-300
            ${isScrolled || !isLanding
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }
        `}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                            <Rocket size={24} className="text-white" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            ROCKET BUILDER
                        </span>
                        <span className="text-xs text-gray-400 -mt-1">PC Builder Pro</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`
                                relative px-4 py-2 rounded-lg transition-all duration-300 font-medium
                                ${location.pathname === item.path
                                ? 'text-blue-400 bg-blue-500/10'
                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                            }
                            `}
                        >
                            {item.label}
                            {location.pathname === item.path && (
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                            )}
                        </Link>
                    ))}

                    {/* User section */}
                    {user ? (
                        <div className="flex items-center gap-4">
                            <Link
                                to="/profile"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                            >
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <User size={16} className="text-white" />
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors">
                                    {user.name}
                                </span>
                            </Link>
                            <button
                                onClick={logout}
                                className="px-4 py-2 rounded-lg border border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500 transition-all duration-300"
                            >
                                Выйти
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <button
                                onClick={login}
                                className="px-6 py-2 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
                            >
                                Войти
                            </button>
                            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium">
                                Регистрация
                            </button>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="bg-slate-800/95 backdrop-blur-md border-t border-white/10">
                        <div className="container mx-auto px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`
                                        block px-4 py-3 rounded-lg transition-all duration-300 font-medium
                                        ${location.pathname === item.path
                                        ? 'text-blue-400 bg-blue-500/10'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }
                                    `}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <div className="border-t border-white/10 pt-4">
                                {user ? (
                                    <div className="space-y-3">
                                        <Link
                                            to="/profile"
                                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                <User size={16} className="text-white" />
                                            </div>
                                            <span className="text-gray-300">Профиль</span>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsMenuOpen(false);
                                            }}
                                            className="w-full text-left px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                                        >
                                            Выйти
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => {
                                                login();
                                                setIsMenuOpen(false);
                                            }}
                                            className="w-full px-4 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors"
                                        >
                                            Войти
                                        </button>
                                        <button
                                            onClick={() => setIsMenuOpen(false)}
                                            className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-colors font-medium"
                                        >
                                            Регистрация
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;