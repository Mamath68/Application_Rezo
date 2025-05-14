import {useState} from "react";
import {TouchableOpacity} from "react-native";
import {useTheme} from "../context/ThemeProvider";
import {ButtonStyles as styles} from "../theme";
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
    const [, setOpacity] = useState(1);

    // Détermination des styles effectifs
    let effectiveBackground = null;
    let effectiveBorder = null;

    if (theme === 'light') {
        if (withBorder && !withBackground) {
            effectiveBorder = 'dark';
        }
        if (withBackground) {
            effectiveBackground = 'dark';
        }
    } else {
        if (withBorder && !withBackground) {
            effectiveBorder = 'light';
        }
        if (withBackground) {
            effectiveBackground = 'light';
        }
    }

    // Styles dynamiques
    const backgroundStyle = effectiveBackground
        ? (effectiveBackground === 'dark' ? styles.backgroundColorDark : styles.backgroundColorLight)
        : {};

    const borderStyle = effectiveBorder
        ? [effectiveBorder === 'dark' ? styles.borderColorDark : styles.borderColorLight, styles.border]
        : {};

    // Couleur du texte
    const textColor = effectiveBackground
        ? (effectiveBackground === 'dark' ? styles.textLight : styles.textDark)
        : (theme === 'light' ? styles.textDark : styles.textLight);

    // Styles par type
    const getComponentStyle = {
        primary: [
            withBackground && backgroundStyle,
            withBorder && borderStyle
        ],
        secondary: [
            withBorder && borderStyle
        ],
        tertiary: [{borderWidth: 0}]
    };

    // Style désactivé
    const disabledStyle = disabled ? {opacity: 0.5} : {};

    return (
        <TouchableOpacity
            style={[styles.base, ...getComponentStyle[type], style, disabledStyle]}
            onPress={disabled ? null : onPress}
            onPressIn={() => !disabled && setOpacity(0.8)}
            onPressOut={() => !disabled && setOpacity(1)}
            disabled={disabled}
        >
            <CustomText style={[styles.text, textColor]}>{children}</CustomText>
        </TouchableOpacity>
    );
};

export default CustomButton;
