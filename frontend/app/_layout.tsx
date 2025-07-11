import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

import { ThemeProvider, useTheme } from '../context/ThemeProvider';

const Layout: React.FC = () => {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
};

const AppContent: React.FC = () => {
    const { fontsLoaded } = useTheme();

    if (!fontsLoaded) return null;

    return (
        <>
            <StatusBar hidden={false} />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
            </Stack>
        </>
    );
};

export default Layout;
