import api from '../service/ApiService';

export const getAllUsers = async () => {
    try {
        // echec — message: 'No users found'
        // OK — response.message: 'Request was successful'
        // OK — response.userList: id, firstName, lastName, username, email, password, role.
        return await api.get('users');
    } catch (error) {
        throw new Error('User - getAllUsers | FAILED: ' + error.message);
    }
};

export const createUser = async (userData) => {
    try {
        return await api.post('user/create', userData);
        // echec — message: 'User already exists'
        // OK - response.message: 'User created successfully'
        // OK - response.user: id, firstName, lastName, username, email, password, role.
    } catch (error) {
        throw new Error('User - createUser | FAILED: ' + error.message);
    }
};

export const updateUser = async (userData) => {
    try {
        return await api.put('user/update', userData);
        // echec — message: 'User not found'
        // OK — response.message: 'User updated successfully'
    } catch (error) {
        throw new Error('User - updateUser | FAILED: ' + error.message);
    }
};

export const deleteUser = async (userId) => {
    try {
        return await api.delete(`user/delete/id/${userId}`);
        // echec — message: 'User not found'
        // OK — response.message: 'User deleted successfully'
    } catch (error) {
        throw new Error('User - deleteUser | FAILED: ' + error.message);
    }
};

export const getOneUserById = async (userId) => {
    try {
        return await api.get(`user/get/id/${userId}`);
        // echec — message: 'User not found'
        // OK — response.message: 'Request was successful'
        // OK — response.user: id, firstName, lastName, username, email, password, role.
    } catch (error) {
        throw new Error('User - getOneUserById | FAILED: ' + error.message);
    }
};

export const getOneUserByUsername = async (username) => {
    try {
        return await api.get(`user/get/username/${username}`);
        // echec — message: 'User not found'
        // OK — response.message: 'Request was successful'
        // OK — response.user: id, firstName, lastName, username, email, password, role.
    } catch (error) {
        throw new Error('User - getOneUserByUsername | FAILED: ' + error.message);
    }
};

export const registerUser = async (userData) => {
    try {
        return await api.post('user/register', userData);
        // echec — message: 'User already exists'
        // OK — response.message: 'User created successfully'
    } catch (error) {
        throw new Error('User - registerUser | FAILED: ' + error.message);
    }
};

export const loginUser = async (userData) => {
    try {
        return await api.post('user/login', userData);
        // echec — message: 'No matching user'
        // OK — response.message: 'Login successful'
        // OK — response.user: id, firstName, lastName, username, email, password, role.

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
