import api from '@service/ApiService';

const handleRequest = async (requestFn, context) => {
    try {
        return await requestFn();
    } catch (error) {
        throw new Error(`${context} | FAILED: ${error.message}`);
    }
};

// Permanences
export const getAllPermanences = () =>
    handleRequest(() => api.get('permanences'), 'Permanences - getAllPermanences');
