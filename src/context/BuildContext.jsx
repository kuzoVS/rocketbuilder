import React, { createContext, useContext, useState, useEffect } from 'react';

const BuildContext = createContext();

export const useBuild = () => {
    const context = useContext(BuildContext);
    if (!context) {
        throw new Error('useBuild must be used within a BuildProvider');
    }
    return context;
};

export const BuildProvider = ({ children }) => {
    const [currentBuild, setCurrentBuild] = useState({
        cpu: null,
        motherboard: null,
        ram: null,
        gpu: null,
        storage: null,
        psu: null,
        cooler: null,
        case: null
    });

    const [savedBuilds, setSavedBuilds] = useState([]);

    useEffect(() => {
        // Загружаем сохраненные сборки
        const saved = localStorage.getItem('savedBuilds');
        if (saved) {
            setSavedBuilds(JSON.parse(saved));
        }
    }, []);

    const updateComponent = (category, component) => {
        setCurrentBuild(prev => ({
            ...prev,
            [category]: component
        }));
    };

    const removeComponent = (category) => {
        setCurrentBuild(prev => ({
            ...prev,
            [category]: null
        }));
    };

    const saveBuild = (name) => {
        const newBuild = {
            id: Date.now(),
            name,
            components: { ...currentBuild },
            createdAt: new Date().toISOString(),
            totalPrice: getTotalPrice()
        };

        const updated = [...savedBuilds, newBuild];
        setSavedBuilds(updated);
        localStorage.setItem('savedBuilds', JSON.stringify(updated));

        return newBuild;
    };

    const deleteBuild = (buildId) => {
        const updated = savedBuilds.filter(build => build.id !== buildId);
        setSavedBuilds(updated);
        localStorage.setItem('savedBuilds', JSON.stringify(updated));
    };

    const loadBuild = (build) => {
        setCurrentBuild(build.components);
    };

    const clearBuild = () => {
        setCurrentBuild({
            cpu: null,
            motherboard: null,
            ram: null,
            gpu: null,
            storage: null,
            psu: null,
            cooler: null,
            case: null
        });
    };

    const getTotalPrice = () => {
        return Object.values(currentBuild)
            .filter(component => component !== null)
            .reduce((total, component) => total + component.price, 0);
    };

    const getCompatibilityWarnings = () => {
        const warnings = [];
        const cpu = currentBuild.cpu;
        const motherboard = currentBuild.motherboard;

        if (cpu && motherboard) {
            const cpuSocket = cpu.compatibility?.[0];
            const mbSocket = motherboard.compatibility?.[0];
            if (cpuSocket && mbSocket && cpuSocket !== mbSocket) {
                warnings.push(`Несовместимость: ${cpu.name} (${cpuSocket}) не подходит к ${motherboard.name} (${mbSocket})`);
            }
        }

        return warnings;
    };

    const value = {
        currentBuild,
        savedBuilds,
        updateComponent,
        removeComponent,
        saveBuild,
        deleteBuild,
        loadBuild,
        clearBuild,
        getTotalPrice,
        getCompatibilityWarnings
    };

    return (
        <BuildContext.Provider value={value}>
            {children}
        </BuildContext.Provider>
    );
};