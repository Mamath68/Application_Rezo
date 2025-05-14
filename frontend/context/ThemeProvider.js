import {createContext, useContext, useEffect, useState} from "react";
import {useColorScheme} from "react-native";

import {loadTheme, saveTheme} from "../utils";
import {useFonts} from "expo-font";

const ThemeContext = createContext('light');

export const ThemeProvider = ({children}) => {
    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState(colorScheme);

    const fonts = useFonts({
        'Montserrat-Regular': require("../fonts/Montserrat-Regular.ttf"),
        'Montserrat-BoldItalic': require("../fonts/Montserrat-BoldItalic.ttf"),
        'DancingScript-Regular': require("../fonts/DancingScript-Regular.ttf"),
        "DancingScript-Bold": require("../fonts/DancingScript-Bold.ttf"),
    });

    useEffect(() => {
        const fetchTheme = async () => {
            const storedTheme = await loadTheme(colorScheme);
            setTheme(storedTheme);
        };
        fetchTheme().then(r => r.json());
    }, []);

    const toggleTheme = async () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        await saveTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, fonts}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
