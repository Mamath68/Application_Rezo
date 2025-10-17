import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = 'theme';

export type ThemeMode = 'light' | 'dark';

/**
 * Charge le thème sauvegardé ou retourne le thème par défaut.
 * @param defaultTheme - Thème à utiliser par défaut si rien n’est stocké
 */
export const loadTheme = async (defaultTheme: ThemeMode = 'light'): Promise<ThemeMode> => {
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
 * @param themeMode
 */
export const saveTheme = async (themeMode: ThemeMode): Promise<void> => {
    try {
        await AsyncStorage.setItem(THEME_KEY, themeMode);
    } catch (error) {
        console.error("Erreur lors de l'enregistrement du thème :", error);
    }
};
