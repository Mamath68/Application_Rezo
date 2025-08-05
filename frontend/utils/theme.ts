import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = 'theme';

/**
 * Charge le thème sauvegardé ou retourne le thème par défaut.
 * @param {'light' | 'dark'} defaultTheme - Thème à utiliser par défaut si rien n’est stocké
 * @returns {Promise<'light' | 'dark'>}
 */
export const loadTheme = async (defaultTheme: 'light' | 'dark' = 'light'): Promise<'light' | 'dark'> => {
    try {
        const savedTheme = await AsyncStorage.getItem(THEME_KEY);
        if (savedTheme === 'dark' || savedTheme === 'light') {
            return savedTheme;
        }
        return defaultTheme;
    } catch (error) {
        console.error('Erreur lors du chargement du thème :', error);
        return defaultTheme;
    }
};

/**
 * Sauvegarde le thème utilisateur ('light' ou 'dark').
 * @param {'light' | 'dark'} themeMode
 */
export const saveTheme = async (themeMode: string) => {
    try {
        const safeTheme = themeMode === 'dark' ? 'dark' : 'light';
        await AsyncStorage.setItem(THEME_KEY, safeTheme);
    } catch (error) {
        console.error("Erreur lors de l'enregistrement du thème :", error);
    }
};
