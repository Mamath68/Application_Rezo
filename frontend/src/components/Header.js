import {HeaderStyles as styles} from "@/theme";

import {useState} from "react";
import {Image, View} from "react-native";

import {useTheme} from "@/context/ThemeProvider";

import logoImageDark from "@assets/dark/logo.png";
import logoImageLight from "@assets/light/logo.png";

import SettingsModal from "./SettingsModal";
import CustomButtonIcon from "./CustomButtonIcon";

const Header = () => {
    const {theme} = useTheme();
    const [modalVisible, setModalVisible] = useState(false);

    // Récupération du style
    const getImageSource = theme === "dark" ? logoImageDark : logoImageLight;

    return (
        <View style={[styles.container]}>
            <Image source={getImageSource} style={[styles.image]}/>

            {/* Bouton pour ouvrir le modal */}
            <CustomButtonIcon
                type="primary"
                withBackground={false}
                icon="settings"
                style={styles.button}
                onPress={() => setModalVisible(true)}
            />

            {/* Modal des paramètres */}
            <SettingsModal visible={modalVisible} onClose={() => setModalVisible(false)}/>
        </View>
    );
};

export default Header;
