import AsyncStorage from '@react-native-async-storage/async-storage';
import {router} from 'expo-router';

/**
 * Charge les données utilisateur stockés localement.
 * @returns {Promise<object|null>} L'utilisateur ou null si inexistant ou erreur.
 */
export const loadUser = async () => {
    try {
        const userData = await AsyncStorage.getItem("user");
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur :", error);
        return null;
    }
};

/**
 * Déconnecte l'utilisateur : suppression du stockage local et redirection.
 * @param {string} redirectTo Chemin vers lequel rediriger après déconnexion (facultatif)
 */
export const logoutUser = async (redirectTo = '/(drawer-guest)') => {
    try {
        await AsyncStorage.multiRemove(['user', 'userToken']); // Nettoyage complet
        router.replace(redirectTo);
    } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
    }
};
