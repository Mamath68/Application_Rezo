import {useState} from "react";
import {Modal, Switch, View,} from "react-native";
import {useTheme} from "@/context/ThemeProvider";

import CustomText from "./CustomText";
import CustomButtonText from "./CustomButtonText";
import {SettingsModalStyles as styles} from "@/theme";
const SettingsModal = ({visible, onClose}) => {
    const {theme, toggleTheme} = useTheme();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuth = () => {
        setIsAuthenticated(!isAuthenticated);
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
                            <CustomText style={styles.optionText}>EN</CustomText>
                        </View>
                    </View>

                    {/* Changement de mode du thème */}
                    <View style={styles.option}>
                        <CustomText>Dark Mode</CustomText>
                        <Switch value={theme === "dark"} onValueChange={toggleTheme}/>
                    </View>

                    {/* Connexion / Déconnexion */}
                    <CustomButtonText
                        type="primary"
                        onPress={handleAuth}
                        onBackground={true}
                        withBackground={true}
                        withBorder={true}
                        buttonStyle={styles.button}
                    >
                        {isAuthenticated ? "Logout" : "Login"}
                    </CustomButtonText>

                    {/* Fermer la modal */}
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
                </View>
            </View>
        </Modal>
    );
};

export default SettingsModal;
