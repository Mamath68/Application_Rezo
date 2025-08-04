import {Image} from "react-native";
import {useTheme} from "../context/ThemeProvider";
import {IconStyles as styles} from "../theme";

const CustomIcon = ({
                        icon = "loading",
                        onBackground = false, // Maintenant un booléen
                        style = {},
                    }) => {
    const {theme} = useTheme();
    const loadingImageDark = require("../assets/dark/rezo-logo.png");
    const loadingImageLight = require("../assets/light/rezo-logo.png");

    const logoImageDark = require("../assets/dark/logo.png");
    const logoImageLight = require("../assets/light/logo.png");

    const settingsDark = require("../assets/dark/settings.png");
    const settingsLight = require("../assets/light/settings.png");

    const menuDark = require("../assets/dark/menu.png");
    const menuLight = require("../assets/light/menu.png");

    // Définition du style
    const defStyle = {
        loading: styles.loading,
        settings: styles.settings,
        menu: styles.menu,
    };

    // Récupération du style
    const getComponentStyle = defStyle[icon];

    // Définition de la source avec un booléen
    const defSource = {
        dark: {
            loading: onBackground ? loadingImageLight : loadingImageDark,
            logo: onBackground ? logoImageLight : logoImageDark,
            settings: onBackground ? settingsLight : settingsDark,
            menu: onBackground ? menuLight : menuDark,
        },
        light: {
            loading: onBackground ? loadingImageDark : loadingImageLight,
            logo: onBackground ? logoImageDark : logoImageLight,
            settings: onBackground ? settingsDark : settingsLight,
            menu: onBackground ? menuDark : menuLight,
        },
    };

    // Récupération de la source
    const getSource = defSource[theme][icon];

    return (
        <Image
            source={getSource}
            style={[styles.base, getComponentStyle, style]}
        />
    );
};

export default CustomIcon;
