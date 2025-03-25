import {useEffect} from "react";
import {View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {SplashScreenStyles as styles} from "@/theme";
import {useTheme} from '@/context/ThemeProvider';

import {checkAuthentification} from "@/utils";
import {CustomIcon, CustomText, ProgressBar} from '@/components';

const SplashScreen = () => {
    const navigation = useNavigation();
    const {theme} = useTheme();

    useEffect(() => {
        checkAuthentification(navigation);
    }, [navigation]);

    // Récupération du style selon le theme
    const getViewBackgroundColorStyle = theme === 'dark' ? styles.containerDark : styles.containerLight;
    const getTextColorStyle = theme === 'dark' ? styles.textDark : styles.textLight;

    return (
        <View style={[styles.container, getViewBackgroundColorStyle]}>
            <CustomIcon icon='loading'/>
            <CustomText level='note' style={[styles.text, getTextColorStyle]}>Loading...</CustomText>
            <ProgressBar/>
        </View>
    );
};

export default SplashScreen;
