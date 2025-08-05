import React, {ReactNode} from "react";
import {StyleProp, TouchableOpacity, ViewStyle} from "react-native";
import {useTheme} from "@context/ThemeProvider";
import {ButtonStyles as styles, Theme} from "@theme/index";
import CustomText from "./CustomText";

type ButtonType = "primary" | "secondary" | "tertiary";

type CustomButtonProps = {
    children: ReactNode;
    type?: ButtonType;
    withBackground?: boolean;
    withBorder?: boolean;
    onPress?: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    accessibilityLabel?: string; // 👈 Ajout ici
};

const noop = () => {
};

const CustomButton = ({
                          children,
                          type = "primary",
                          style,
                          withBackground = true,
                          withBorder = true,
                          onPress = noop,
                          disabled = false,
                          accessibilityLabel,
                      }: CustomButtonProps) => {
    const {theme} = useTheme();

    let effectiveBackground: "dark" | "light" | null = null;
    let effectiveBorder: "dark" | "light" | null = null;

    if (theme === "light") {
        if (withBorder && !withBackground) effectiveBorder = "dark";
        if (withBackground) effectiveBackground = "dark";
    } else {
        if (withBorder && !withBackground) effectiveBorder = "light";
        if (withBackground) effectiveBackground = "light";
    }

    const backgroundStyle = effectiveBackground
        ? [
            effectiveBackground === "dark"
                ? Theme.backgroundColorDark
                : Theme.backgroundColorLight,
        ]
        : [];

    const borderStyle = effectiveBorder
        ? [
            effectiveBorder === "dark"
                ? styles.borderColorDark
                : styles.borderColorLight,
            styles.border,
        ]
        : [];

    const textColor = effectiveBackground
        ? effectiveBackground === "dark"
            ? Theme.textLight
            : Theme.textDark
        : theme === "light"
            ? Theme.textDark
            : Theme.textLight;

    const getComponentStyle: Record<ButtonType, any[]> = {
        primary: [...backgroundStyle, ...borderStyle],
        secondary: [...borderStyle],
        tertiary: [{borderWidth: 0}],
    };

    const disabledStyle = disabled ? {opacity: 0.5} : {};

    return (
        <TouchableOpacity
            style={[styles.base, ...getComponentStyle[type], style, disabledStyle]}
            onPress={disabled ? undefined : onPress}
            activeOpacity={disabled ? 1 : 0.7}
            disabled={disabled}
            accessibilityLabel={accessibilityLabel}
        >
            <CustomText style={[Theme.text, textColor]}>{children}</CustomText>
        </TouchableOpacity>
    );
};

export default CustomButton;