import {Image} from "react-native";
import {useTheme} from "../context/ThemeProvider";
import {IconStyles as styles} from "../theme";

const CustomIcon = ({
                        icon = "loading",
                        onBackground = false,
                        style = {},
                    }) => {
    const {theme} = useTheme();

    // Vérification sécurisée de l'icône
    const validIcons = ["loading", "logo", "settings", "menu"];
    const safeIcon = validIcons.includes(icon) ? icon : "loading";

    // Chargement dynamique des images
    const defSource = {
        dark: {
            loading: onBackground
                ? require("../assets/light/rezo-logo.png")
                : require("../assets/dark/rezo-logo.png"),
            logo: onBackground
                ? require("../assets/light/logo.png")
                : require("../assets/dark/logo.png"),
            settings: onBackground
                ? require("../assets/light/settings.png")
                : require("../assets/dark/settings.png"),
            menu: onBackground
                ? require("../assets/light/menu.png")
                : require("../assets/dark/menu.png"),
        },
        light: {
            loading: onBackground
                ? require("../assets/dark/rezo-logo.png")
                : require("../assets/light/rezo-logo.png"),
            logo: onBackground
                ? require("../assets/dark/logo.png")
                : require("../assets/light/logo.png"),
            settings: onBackground
                ? require("../assets/dark/settings.png")
                : require("../assets/light/settings.png"),
            menu: onBackground
                ? require("../assets/dark/menu.png")
                : require("../assets/light/menu.png"),
        },
    };

    // Style de base par type d’icône
    const defStyle = {
        loading: styles.loading,
        logo: styles.logo ?? {}, // évite les erreurs si non définies
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
