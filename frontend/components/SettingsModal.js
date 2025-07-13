import {Modal, Switch, View} from "react-native";
import {useTheme} from "../context/ThemeProvider";

import CustomText from "./CustomText";
import CustomButtonText from "./CustomButtonText";
import {SettingsModalStyles as styles, Theme} from "../theme";

const SettingsModal = ({visible, onClose}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Modal transparent visible={visible} animationType="slide">
            <View style={styles.overlay}>
                <View
                    style={[
                        styles.modalContainer,
                        theme === "dark" ? Theme.backgroundColorDark : Theme.backgroundColorLight,
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
                </View>
            </View>
        </Modal>
    );
};

export default SettingsModal;
