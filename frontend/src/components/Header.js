import { HeaderStyles as styles } from "@/theme";

import { useState } from "react";
import { View, Text } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import SettingsModal from "./SettingsModal";
import CustomButtonIcon from "./CustomButtonIcon";
import CustomText from "./CustomText";

const Header = ({title}) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[styles.container]}>
            <CustomButtonIcon
                type="primary"
                withBackground={false}
                icon="menu"
                style={styles.button}
                onPress={() => navigation.openDrawer()}
            />

            {/* Affichage dynamique du titre */}
            <CustomText level="h2">{title}</CustomText>

            <CustomButtonIcon
                type="primary"
                withBackground={false}
                icon="settings"
                style={styles.button}
                onPress={() => setModalVisible(true)}
            />

            <SettingsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        </View>
    );
};

export default Header;
