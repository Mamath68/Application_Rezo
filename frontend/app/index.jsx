import {useEffect} from "react";
import {View} from 'react-native';
import {SplashScreenStyles as styles} from "../theme";
import {useTheme} from '../context/ThemeProvider';

import {checkAuthentication} from "../utils";
import {CustomIcon, CustomText, ProgressBar} from '../components';

export default function SplashScreen() {
    const {theme} = useTheme();

    useEffect(() => {
        checkAuthentication();
    }, []);

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
