import {Modal, Switch, View} from "react-native";
import {useTheme} from "../context/ThemeProvider";

import CustomText from "./CustomText";
import CustomButtonText from "./CustomButtonText";
import {SettingsModalStyles as styles, Theme} from "../theme";
import {logoutUser} from "../utils";
import {useRouter} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";

const CustomModal = ({visible, onClose}) => {
    const {theme, toggleTheme} = useTheme();
    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                setIsLoggedIn(!!storedUser); // true si user existe, sinon false
            } catch (e) {
                console.error("Erreur lors de la vérification de l'utilisateur :", e);
            }
        };

        if (visible) checkUser(); // Ne le fait que si le modal est affiché
    }, [visible]);

    const logout = async () => {
        try {
            await logoutUser();
            await AsyncStorage.removeItem('user');
            setIsLoggedIn(false);
            router.replace('/(drawer-guest)');
        } catch (error) {
            console.error('Erreur lors du logout', error);
        }
    };

    return (
        <Modal transparent visible={visible} animationType="slide">
            <View style={styles.overlay}>
                <View
                    style={[
                        styles.modalContainer,
                        theme === "dark" ? Theme.backgroundColorDark.dark : Theme.backgroundColorLight,
                    ]}
                >
                    <CustomText style={styles.title}>Settings</CustomText>

                    {/* Langue */}
                    <View style={styles.option}>
                        <CustomText>Language</CustomText>
                        <View style={styles.languageBadge}>
                            <CustomText style={styles.optionText}>En travaux</CustomText>
                        </View>
                    </View>

                    {/* Thème */}
                    <View style={styles.option}>
                        <CustomText>{theme === "dark" ? "Dark Mode" : "Light Mode"}</CustomText>
                        <Switch
                            value={theme === "dark"}
                            onValueChange={toggleTheme}
                            thumbColor={theme === "dark" ? "#fff" : "#1E90FF"}
                            trackColor={{
                                false: "#ADD8E6",
                                true: "#EFEFEF",
                            }}
                        />
                    </View>

                    {/* Bouton Close */}
                    <CustomButtonText
                        type="secondary"
                        onBackground={false}
                        withBackground={false}
                        withBorder={true}
                        onPress={onClose}
                        buttonStyle={styles.button}
                    >
                        Close
                    </CustomButtonText>

                    {/* Bouton Logout affiché uniquement si connecté */}
                    {isLoggedIn && (
                        <CustomButtonText
                            type="secondary"
                            onBackground={false}
                            withBackground={false}
                            withBorder={true}
                            onPress={logout}
                            buttonStyle={styles.button}
                        >
                            Logout
                        </CustomButtonText>
                    )}
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
