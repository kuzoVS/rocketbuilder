const API_BASE_URL = 'http://localhost:8000/api';

class ApiService {
    async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    // Компоненты
    async getComponents(category, filters = {}) {
        const params = new URLSearchParams(filters);
        return this.request(`/components/${category}?${params}`);
    }

    async searchComponents(query, category = null) {
        const params = new URLSearchParams({ query });
        if (category) params.append('category', category);
        return this.request(`/components/search?${params}`);
    }

    // Цены
    async getPriceHistory(componentId) {
        return this.request(`/prices/history/${componentId}`);
    }

    async subscribeToPriceAlerts(componentId, targetPrice) {
        return this.request('/prices/alerts', {
            method: 'POST',
            body: JSON.stringify({ componentId, targetPrice }),
        });
    }

    // Сборки
    async saveUserBuild(buildData) {
        return this.request('/builds', {
            method: 'POST',
            body: JSON.stringify(buildData),
        });
    }

    async getUserBuilds() {
        return this.request('/builds');
    }

    // Совместимость
    async checkCompatibility(components) {
        return this.request('/compatibility/check', {
            method: 'POST',
            body: JSON.stringify({ components }),
        });
    }
}

export default new ApiService();