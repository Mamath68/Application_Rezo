import {useEffect} from "react";
import {View} from 'react-native';
import {Theme} from "../theme";
import {useTheme} from '../context/ThemeProvider';

import {checkAuthentication} from "../utils";
import {CustomIcon, CustomText, ProgressBar} from '../components';

export default function SplashScreen() {
    const {theme} = useTheme();

    useEffect(() => {
        checkAuthentication();
    }, []);

    const getViewBackgroundColorStyle = theme === 'dark' ? Theme.backgroundColorDark : Theme.backgroundColorLight;
    const getTextColorStyle = theme === 'dark' ? Theme.textLight : Theme.textDark;

    return (
        <View style={[Theme.container, getViewBackgroundColorStyle]}>
            <CustomIcon icon='loading'/>
            <CustomText level='note' style={[Theme.Montserrat, getTextColorStyle]}>Loading...</CustomText>
            <ProgressBar/>
        </View>
    );
};
