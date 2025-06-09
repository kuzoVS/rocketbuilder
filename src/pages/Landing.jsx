import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Pricing from '../components/landing/Pricing';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/landing/Footer';

const Landing = () => {
    const navigate = useNavigate();

    const handleStartBuilding = () => {
        navigate('/calculator');
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <Hero onStartBuilding={handleStartBuilding} />
            <Features />
            <Pricing />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Landing;
