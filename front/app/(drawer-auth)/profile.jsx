import {CustomText, CustomView} from "../../components";
import {HomeScreenStyles as styles} from "../../theme";
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
    const [username, setUsername] = useState('');
    useEffect(() => {
        const getUserFromStorage = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    setUsername(parsedUser.username);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération de l’utilisateur:', error);
            }
        };

        getUserFromStorage();
    }, []);

    return (
        <CustomView style={styles.container}>
            <CustomText level="h2">Profile</CustomText>
            <CustomText level="h3">Welcome, {username || 'Guest'}!</CustomText>
        </CustomView>
    );
};
