import React, {createContext, useContext, useEffect, useState, ReactNode} from 'react';
import {useColorScheme} from 'react-native';
import {useFonts} from 'expo-font';
import {loadTheme, saveTheme} from '../utils';

// Types pour les thèmes autorisés
type ThemeMode = 'light' | 'dark';

// Interface du contexte
interface ThemeContextType {
    theme: ThemeMode;
    toggleTheme: () => void;
    fontsLoaded: boolean;
}

// Valeur par défaut du contexte
const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {
    },
    fontsLoaded: false,
});

// Props attendues par le provider
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const systemColorScheme = useColorScheme();
    const [theme, setTheme] = useState<ThemeMode>(systemColorScheme || 'light');

    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../fonts/Montserrat-Regular.ttf'),
        'Montserrat-BoldItalic': require('../fonts/Montserrat-BoldItalic.ttf'),
        'DancingScript-Regular': require('../fonts/DancingScript-Regular.ttf'),
        'DancingScript-Bold': require('../fonts/DancingScript-Bold.ttf'),
    });

    useEffect(() => {
        const fetchTheme = async () => {
            const storedTheme = await loadTheme(systemColorScheme || 'light');
            setTheme(storedTheme as ThemeMode);
        };
        fetchTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        await saveTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, fontsLoaded}}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook personnalisé avec typage automatique
export const useTheme = (): ThemeContextType => useContext(ThemeContext);
