import {CustomText, CustomView} from "../../components";
import {HomeScreenStyles as styles, Theme} from "../../theme";
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUserFromStorage = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    setUser(parsedUser);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération de l’utilisateur:', error);
            }
        };

        getUserFromStorage();
    }, []);

    return (
        <CustomView style={Theme.container}>
            <CustomText level="h2">{user.username} !</CustomText>
            {user.genre && <CustomText level="p">Mes pronoms : {user.genre}</CustomText>}
            {user.email && <CustomText level="p">Email : {user.email}</CustomText>}
        </CustomView>
    );
};
