import {Stack} from 'expo-router';
import {ThemeProvider} from '../context/ThemeProvider';
import {StatusBar} from 'react-native';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const user = await AsyncStorage.getItem('user');
            setIsAuthenticated(!!user);
        };

        checkAuth();
    }, []);

    return (
        <ThemeProvider>
            <StatusBar hidden={false}/>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index"/>
                {isAuthenticated ? (
                    <Stack.Screen name="(drawer-auth)"/>
                ) : (
                    <Stack.Screen name="(drawer-guest)"/>
                )}
            </Stack>
        </ThemeProvider>
    );
}
