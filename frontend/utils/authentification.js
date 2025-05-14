import AsyncStorage from '@react-native-async-storage/async-storage';
import {router} from 'expo-router';

export const checkAuthentification = async () => {
    try {
        const user = await AsyncStorage.getItem('user');

        setTimeout(() => {
            if (user) {
                router.replace('/(drawer-auth)');
            } else {
                router.replace('/(drawer-guest)');
            }
        }, 3500);
    } catch (error) {
        console.error("Erreur lors de la récupération des données de l'utilisateur", error);
        router.replace('/(drawer-guest)');
    }
};
