import React, {ReactNode} from "react";
import {Text, TextStyle, StyleProp} from "react-native";
import {useTheme} from "../context/ThemeProvider";
import {TextStyles as styles, Theme} from "../theme";

type TextLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface CustomTextProps {
    level?: TextLevel;
    children: ReactNode;
    style?: StyleProp<TextStyle>;
}

const CustomText: React.FC<CustomTextProps> = ({
                                                   level = "p",
                                                   children,
                                                   style = {},
                                               }) => {
    const {theme} = useTheme();

    const defStyle: Record<TextLevel, TextStyle> = {
        h1: styles.h1,
        h2: styles.h2,
        h3: styles.h3,
        h4: styles.h4,
        h5: styles.h5,
        h6: styles.h6,
        p: styles.p,

    };

    const componentStyle = defStyle[level] || defStyle.p;
    const textColor = theme === 'dark' ? Theme.textLight : Theme.textDark;

    return (
        <Text style={[componentStyle, textColor, style]}>
            {children}
        </Text>
    );
};

export default CustomText;
