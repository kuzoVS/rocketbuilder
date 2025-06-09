import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BuildProvider } from './context/BuildContext';
import Navigation from './components/common/Navigation';
import Landing from './pages/Landing';
import Calculator from './pages/Calculator';
import Profile from './pages/Profile';
import PricingPage from './pages/Pricing';
import './index.css';

function App() {
    return (
        <AuthProvider>
            <BuildProvider>
                <Router>
                    <div className="App">
                        <Navigation />
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="/calculator" element={<Calculator />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/pricing" element={<PricingPage />} />
                        </Routes>
                    </div>
                </Router>
            </BuildProvider>
        </AuthProvider>
    );
}

export default App;
