import React, {createContext, useContext, useEffect, useState} from "react";
import {useColorScheme} from "react-native";
import {useFonts} from "expo-font";

import {loadTheme, saveTheme} from "@utils/index";

// TYPES
type ThemeType = "light" | "dark";

type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
    fontsLoaded: boolean;
};

type ThemeProviderProps = {
    children: React.ReactNode;
};

// CONTEXT
const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
    fontsLoaded: false,
});

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const systemColorScheme = useColorScheme();
    const [theme, setTheme] = useState<ThemeType>(systemColorScheme || "light");

    const [fontsLoaded] = useFonts({
        "Montserrat-Regular": require("@fonts/Montserrat-Regular.ttf"),
        "Montserrat-BoldItalic": require("@fonts/Montserrat-BoldItalic.ttf"),
        "DancingScript-Regular": require("@fonts/DancingScript-Regular.ttf"),
        "DancingScript-Bold": require("@fonts/DancingScript-Bold.ttf"),
    });

    useEffect(() => {
        const fetchTheme = async () => {
            const storedTheme = await loadTheme(systemColorScheme || "light");
            setTheme(storedTheme);
        };
        fetchTheme().then(r => console.log(r));
    }, []);

    const toggleTheme = async () => {
        const newTheme: ThemeType = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        await saveTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, fontsLoaded }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
