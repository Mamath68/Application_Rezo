import {HomeScreenStyles as styles} from "../../theme";
import {CustomText, CustomView} from "../../components";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {

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

        <CustomView style={styles.container}>
            <CustomText level="h2">Bienvenue, {user.username || 'Guest'} !</CustomText>
        </CustomView>
    );
};
