import React, {useEffect} from "react";
import {Theme} from "@theme/index";
import {useTheme} from '@context/ThemeProvider';

import {checkAuthentication} from "@utils/index";
import {CustomIcon, CustomText, CustomView, ProgressBar} from '@components/index';

export default function SplashScreen() {
    const {theme} = useTheme();

    useEffect(() => {
        checkAuthentication();
    }, []);

    const getTextColorStyle = theme === 'dark' ? Theme.textLight : Theme.textDark;

    return (
        <CustomView style={[Theme.container]}>
            <CustomIcon icon='loading'/>
            <CustomText level='note' style={[Theme.Montserrat, getTextColorStyle]}>Chargement...</CustomText>
            <ProgressBar/>
        </CustomView>
    );
};
