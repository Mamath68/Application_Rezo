import { HeaderStyles as styles } from "../theme";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { SafeAreaView, Platform, StatusBar } from "react-native";

import SettingsModal from "./SettingsModal";
import CustomButtonIcon from "./CustomButtonIcon";
import CustomText from "./CustomText";
import CustomView from "./CustomView";

const Header = ({ title }) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    // Ajout du padding conditionnel pour Android
    const paddingTop = Platform.OS === "android" ? (StatusBar.currentHeight || 35) : 0;

    return (
        <SafeAreaView style={{ paddingTop }}>
            <CustomView style={styles.container}>
                <CustomButtonIcon
                    type="primary"
                    withBackground={false}
                    icon="menu"
                    style={styles.button}
                    onPress={() => navigation.dispatch(navigation.openDrawer())}
                />

                <CustomText level="h3">{title}</CustomText>

                <CustomButtonIcon
                    type="primary"
                    withBackground={false}
                    icon="settings"
                    style={styles.button}
                    onPress={() => setModalVisible(true)}
                />

                <SettingsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
            </CustomView>
        </SafeAreaView>
    );
};

export default Header;
