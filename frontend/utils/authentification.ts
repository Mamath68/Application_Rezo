import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

/**
 * Vérifie si l'utilisateur est connecté.
 * Redirige vers la bonne stack en fonction de la présence de données utilisateur.
 */
export const checkAuthentication = async (): Promise<void> => {
    try {
        const user = await AsyncStorage.getItem('user');

        setTimeout(() => {
            const isAuthenticated = Boolean(user);
            const targetRoute = isAuthenticated ? '/(drawer)' : '/(drawer)';
            router.replace(targetRoute);
        }, 3500);
    } catch (error) {
        console.error("Auth Check Error:", error);
        router.replace('/(drawer)');
    }
};
