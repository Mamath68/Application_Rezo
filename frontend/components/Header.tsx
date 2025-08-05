import React, { useState } from "react";
import { SafeAreaView, StyleProp, ViewStyle } from "react-native";
import { useNavigation, DrawerActions, NavigationProp } from "@react-navigation/native";

import { HeaderStyles as styles } from "@theme/index";

import SettingsModal from "./SettingsModal";
import CustomButtonIcon from "./CustomButtonIcon";
import CustomText from "./CustomText";
import CustomView from "./CustomView";

type HeaderProps = {
    title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
    const navigation = useNavigation<NavigationProp<Record<string, object | undefined>>>();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView>
            <CustomView style={styles.container}>
                <CustomButtonIcon
                    type="primary"
                    withBackground={false}
                    icon="menu"
                    style={styles.button as StyleProp<ViewStyle>}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                />

                <CustomText level="h3" center>
                    {title}
                </CustomText>

                <CustomButtonIcon
                    type="primary"
                    withBackground={false}
                    icon="settings"
                    style={styles.button as StyleProp<ViewStyle>}
                    onPress={() => setModalVisible(true)}
                />

                <SettingsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
            </CustomView>
        </SafeAreaView>
    );
};

export default Header;
