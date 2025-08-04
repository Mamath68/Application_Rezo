import {TouchableOpacity} from "react-native";
import {useTheme} from "../context/ThemeProvider";
import {ButtonStyles as styles, Theme} from "../theme";
import CustomText from "./CustomText";

const CustomButton = ({
                          children,
                          type = "primary",
                          style,
                          withBackground = true,
                          withBorder = true,
                          onPress = () => {
                          },
                          disabled = false,
                      }) => {
    const {theme} = useTheme();

    // Détermination des styles dynamiques
    let effectiveBackground = null;
    let effectiveBorder = null;

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

    const getComponentStyle = {
        primary: [...backgroundStyle, ...borderStyle],
        secondary: [...borderStyle],
        tertiary: [{borderWidth: 0}],
    };

    const disabledStyle = disabled ? {opacity: 0.5} : {};

    return (
        <TouchableOpacity
            style={[styles.base, ...getComponentStyle[type], style, disabledStyle]}
            onPress={disabled ? null : onPress}
            activeOpacity={disabled ? 1 : 0.7}
            disabled={disabled}
        >
            <CustomText style={[Theme.text, textColor]}>{children}</CustomText>
        </TouchableOpacity>
    );
};

export default CustomButton;
