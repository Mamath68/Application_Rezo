import {useEffect} from "react";
import {Theme} from "../theme";
import {useTheme} from '../context/ThemeProvider';

import {checkAuthentication} from "../utils";
import {CustomIcon, CustomText, CustomView, ProgressBar} from '../components';

export default function SplashScreen() {
    const {theme} = useTheme();

    useEffect(() => {
        checkAuthentication();
    }, []);

    const getTextColorStyle = theme === 'dark' ? Theme.textLight : Theme.textDark;

    return (
        <CustomView style={[Theme.container]}>
            <CustomIcon icon='loading'/>
            <CustomText level='note' style={[Theme.Montserrat, getTextColorStyle]}>Loading...</CustomText>
            <ProgressBar/>
        </CustomView>
    );
};
