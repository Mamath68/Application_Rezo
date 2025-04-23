import {Modal, Switch, View,} from "react-native";
import {useTheme} from "../context/ThemeProvider";

import CustomText from "./CustomText";
import CustomButtonText from "./CustomButtonText";
import {SettingsModalStyles as styles} from "../theme";
import {logoutUser} from "../utils";
import {useRouter} from "expo-router";

const SettingsModal = ({visible, onClose}) => {
    const {theme, toggleTheme} = useTheme();

    const router = useRouter();

    const logout = async () => {
        try {
            await logoutUser(); // ta fonction existante
            router.replace('/(drawer-guest)'); // redirection vers page invité
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
                        theme === "dark" ? styles.dark : styles.light,
                    ]}
                >
                    <CustomText style={styles.title}>Settings</CustomText>

                    {/* Affichage de la langue actuelle (décoratif) */}
                    <View style={styles.option}>
                        <CustomText>Language</CustomText>
                        <View style={styles.languageBadge}>
                            <CustomText style={styles.optionText}>En travaux</CustomText>
                        </View>
                    </View>

                    {/* Changement de mode du thème */}
                    <View style={styles.option}>
                        <CustomText>{theme === "dark" ? "Dark Mode" : "Light Mode"}</CustomText>
                        <Switch value={theme === "dark"} onValueChange={toggleTheme}
                                thumbColor={theme === "dark" ? "#fff" : "#1E90FF"}
                                trackColor={{
                                    false: "#ADD8E6",
                                    true: "#EFEFEF",
                                }}/>
                    </View>

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
                </View>
            </View>
        </Modal>
    );
};

export default SettingsModal;
