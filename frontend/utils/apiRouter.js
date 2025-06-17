import api from '../service/ApiService';

const handleRequest = async (requestFn, context) => {
    try {
        return await requestFn();
    } catch (error) {
        throw new Error(`${context} | FAILED: ${error.message}`);
    }
};

export const getAllUsers = () =>
    handleRequest(() => api.get('users'), 'User - getAllUsers');

export const createUser = (userData) =>
    handleRequest(() => api.post('users', userData), 'User - createUser');

export const updateUser = (userData) =>
    handleRequest(() => api.put('users', userData), 'User - updateUser');

export const deleteUser = (userId) =>
    handleRequest(() => api.delete(`users/${userId}`), 'User - deleteUser');

export const getOneUserById = (userId) =>
    handleRequest(() => api.get(`users/id/${userId}`), 'User - getOneUserById');

export const getOneUserByUsername = (username) =>
    handleRequest(() => api.get(`users/username/${username}`), 'User - getOneUserByUsername');

export const registerUser = (userData) =>
    handleRequest(() => api.post('users/register', userData), 'User - registerUser');

export const loginUser = (userData) =>
    handleRequest(() => api.post('users/login', userData), 'User - loginUser');

// Permanences
export const getAllPermanences = () =>
    handleRequest(() => api.get('permanences'), 'Permanences - getAllPermanences');
