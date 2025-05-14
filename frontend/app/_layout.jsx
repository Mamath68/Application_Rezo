import {Stack} from 'expo-router';
import {ThemeProvider} from '../context/ThemeProvider';
import {StatusBar} from 'react-native';

export default function RootLayout() {
    return (
        <ThemeProvider>
            <StatusBar hidden={false}/>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index"/>
            </Stack>
        </ThemeProvider>
    );
}
