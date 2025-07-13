import AsyncStorage from '@react-native-async-storage/async-storage';

// Type accepté pour le thème
export type ThemeMode = 'light' | 'dark';

const THEME_KEY = 'theme';

/**
 * Charge le thème sauvegardé ou retourne le thème par défaut.
 * @param defaultTheme - Thème à utiliser par défaut si rien n’est stocké
 * @returns Le thème récupéré ou le thème par défaut
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
 * @param themeMode - Thème à sauvegarder
 */
export const saveTheme = async (themeMode: ThemeMode): Promise<void> => {
    try {
        const safeTheme: ThemeMode = themeMode === 'dark' ? 'dark' : 'light';
        await AsyncStorage.setItem(THEME_KEY, safeTheme);
    } catch (error) {
        console.error("Erreur lors de l'enregistrement du thème :", error);
    }
};
