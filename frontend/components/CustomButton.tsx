import React, { ReactNode, useState } from "react";
import { TouchableOpacity, StyleProp, ViewStyle, GestureResponderEvent } from "react-native";
import { useTheme } from "../context/ThemeProvider";
import { ButtonStyles as styles, Theme } from "../theme";
import CustomText from "./CustomText";

type ButtonType = "primary" | "secondary" | "tertiary";

interface CustomButtonProps {
    children: ReactNode;
    type?: ButtonType;
    style?: StyleProp<ViewStyle>;
    withBackground?: boolean;
    onBackground?: boolean;
    withBorder?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    type = "primary",
    style,
    withBackground = true,
    onBackground = true,
    withBorder = true,
    onPress = () => {},
    disabled = false,
}) => {
    const { theme } = useTheme();
    const [, setOpacity] = useState(1);

    let effectiveBackground: "dark" | "light" | null = null;
    let effectiveBorder: "dark" | "light" | null = null;

    if (theme === "light") {
        if (withBorder && !withBackground && !onBackground) effectiveBorder = "dark";
        if (withBackground) effectiveBackground = "dark";
        if (onBackground) effectiveBackground = "dark";
    } else {
        if (withBorder && !withBackground && !onBackground) effectiveBorder = "light";
        if (withBackground) effectiveBackground = "light";
        if (onBackground) effectiveBackground = "light";
    }

    const backgroundStyle =
        effectiveBackground === "dark"
            ? Theme.backgroundColorDark
            : effectiveBackground === "light"
            ? Theme.backgroundColorLight
            : {};

    const borderStyle =
        effectiveBorder
            ? [
                  effectiveBorder === "dark"
                      ? styles.borderColorDark
                      : styles.borderColorLight,
                  styles.border,
              ]
            : {};

    const textColor =
        effectiveBackground === "dark"
            ? Theme.textLight
            : effectiveBackground === "light"
            ? Theme.textDark
            : theme === "light"
            ? Theme.textDark
            : Theme.textLight;

    const getComponentStyle: Record<ButtonType, StyleProp<ViewStyle>[]> = {
        primary: [withBackground && backgroundStyle, withBorder && borderStyle],
        secondary: [withBorder && borderStyle],
        tertiary: [{ borderWidth: 0 }],
    };

    const disabledStyle = disabled ? { opacity: 0.5 } : {};

    return (
        <TouchableOpacity
            style={[styles.base, ...getComponentStyle[type], style, disabledStyle]}
            onPress={disabled ? undefined : onPress}
            onPressIn={() => !disabled && setOpacity(0.8)}
            onPressOut={() => !disabled && setOpacity(1)}
            disabled={disabled}
        >
            <CustomText style={[Theme.text, textColor]}>{children}</CustomText>
        </TouchableOpacity>
    );
};

export default CustomButton;
