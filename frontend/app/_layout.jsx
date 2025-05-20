import {Stack} from 'expo-router';
import {StatusBar} from 'react-native';

import {ThemeProvider, useTheme} from '../context/ThemeProvider';

const Layout = () => {
    return (
        <ThemeProvider>
            <AppContent/>
        </ThemeProvider>
    );
};

const AppContent = () => {
    const {fontsLoaded} = useTheme();

    if (!fontsLoaded) return null; // ou écran de chargement

    return (
        <>
            <StatusBar hidden={false}/>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index"/>
            </Stack>
        </>
    );
};

export default Layout;
