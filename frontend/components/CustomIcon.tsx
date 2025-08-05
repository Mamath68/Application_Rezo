import React from "react";
import {Image, ImageSourcePropType, ImageStyle, StyleProp} from "react-native";
import {useTheme} from "@context/ThemeProvider";
import {IconStyles as styles} from "@theme/index";

// Les icônes autorisées
type IconName = "loading" | "logo" | "settings" | "menu";

type CustomIconProps = {
    icon?: IconName;
    onBackground?: boolean;
    style?: StyleProp<ImageStyle>;
};

const CustomIcon: React.FC<CustomIconProps> = ({
                                                   icon = "loading",
                                                   onBackground = false,
                                                   style = {},
                                               }) => {
    const {theme} = useTheme();

    // Vérification sécurisée de l'icône
    const validIcons: IconName[] = ["loading", "logo", "settings", "menu"];
    const safeIcon: IconName = validIcons.includes(icon) ? icon : "loading";

    // Chargement dynamique des images
    const defSource: Record<"light" | "dark", Record<IconName, ImageSourcePropType>> = {
        dark: {
            loading: onBackground
                ? require("@assets/light/rezo-logo.png")
                : require("@assets/dark/rezo-logo.png"),
            logo: onBackground
                ? require("@assets/light/logo.png")
                : require("@assets/dark/logo.png"),
            settings: onBackground
                ? require("@assets/light/settings.png")
                : require("@assets/dark/settings.png"),
            menu: onBackground
                ? require("@assets/light/menu.png")
                : require("@assets/dark/menu.png"),
        },
        light: {
            loading: onBackground
                ? require("@assets/dark/rezo-logo.png")
                : require("@assets/light/rezo-logo.png"),
            logo: onBackground
                ? require("@assets/dark/logo.png")
                : require("@assets/light/logo.png"),
            settings: onBackground
                ? require("@assets/dark/settings.png")
                : require("@assets/light/settings.png"),
            menu: onBackground
                ? require("@assets/dark/menu.png")
                : require("@assets/light/menu.png"),
        },
    };

    // Style de base par type d’icône
    const defStyle: Partial<Record<IconName, StyleProp<ImageStyle>>> = {
        loading: styles.loading,
        settings: styles.settings,
        menu: styles.menu,
    };

    const getComponentStyle = defStyle[safeIcon] || {};
    const getSource = defSource[theme][safeIcon];

    return (
        <Image
            source={getSource}
            style={[styles.base, getComponentStyle, style]}
        />
    );
};

export default CustomIcon;
