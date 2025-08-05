import React, {ReactNode} from "react";
import {StyleProp, Text, TextStyle} from "react-native";
import {useTheme} from "@context/ThemeProvider";
import {TextStyles as styles, Theme} from "@theme/index";

type TextLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "note" | "description";

type CustomTextProps = {
    level?: TextLevel;
    children?: ReactNode;
    style?: StyleProp<TextStyle>;
    center?: boolean;
};

const CustomText: React.FC<CustomTextProps> = ({
                                                   level = "p",
                                                   children,
                                                   style = {},
                                                   center = false,
                                               }) => {
    const {theme} = useTheme();

    const defStyle: Record<TextLevel, StyleProp<TextStyle>> = {
        h1: styles.h1,
        h2: styles.h2,
        h3: styles.h3,
        h4: styles.h4,
        h5: styles.h5,
        h6: styles.h6,
        p: styles.p,
        note: styles.note,
        description: styles.description,
    };

    const componentStyle = defStyle[level] || defStyle.p;
    const textColor = theme === "dark" ? Theme.textLight : Theme.textDark;
    const centerStyle = center ? {textAlign: "center" as const} : {};

    return (
        <Text style={[componentStyle, textColor, centerStyle, style]}>
            {children}
        </Text>
    );
};

export default CustomText;
