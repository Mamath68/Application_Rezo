import api from '../service/ApiService';

export const getAllUsers = async () => {
    try {
        return await api.get('users');
    } catch (error) {
        throw new Error('User - getAllUsers | FAILED: ' + error.message);
    }
};

export const createUser = async (userData) => {
    try {
        return await api.post('user/create', userData);
    } catch (error) {
        throw new Error('User - createUser | FAILED: ' + error.message);
    }
};

export const updateUser = async (userData) => {
    try {
        return await api.put('user/update', userData);
    } catch (error) {
        throw new Error('User - updateUser | FAILED: ' + error.message);
    }
};

export const deleteUser = async (userId) => {
    try {
        return await api.delete(`user/delete/id/${userId}`);
    } catch (error) {
        throw new Error('User - deleteUser | FAILED: ' + error.message);
    }
};

export const getOneUserById = async (userId) => {
    try {
        return await api.get(`user/get/id/${userId}`);
    } catch (error) {
        throw new Error('User - getOneUserById | FAILED: ' + error.message);
    }
};

export const getOneUserByUsername = async (username) => {
    try {
        return await api.get(`user/get/username/${username}`);
    } catch (error) {
        throw new Error('User - getOneUserByUsername | FAILED: ' + error.message);
    }
};

export const registerUser = async (userData) => {
    try {
        return await api.post('user/register', userData);
    } catch (error) {
        throw new Error('User - registerUser | FAILED: ' + error.message);
    }
};

export const loginUser = async (userData) => {
    try {
        return await api.post('user/login', userData);
    } catch (error) {
        throw new Error('User - loginUser | FAILED: ' + error.message);
    }
};

/**
 * Permanences
 * */

export const getAllPermanences = async () => {
    try {
        return await api.get('permanences');
    } catch (error) {
        throw new Error('Permanences - getAllPermanences | FAILED: ' + error.message);
    }
};
