import {Image} from "react-native";
import {useTheme} from "@/context/ThemeProvider";
import {IconStyles as styles} from "@/theme";
import loadingImageDark from "@assets/dark/rezo-logo.png";
import loadingImageLight from "@assets/light/rezo-logo.png";

import logoImageDark from "@assets/dark/logo.png";
import logoImageLight from "@assets/light/logo.png";

import settingsDark from "@assets/dark/settings.png";
import settingsLight from "@assets/light/settings.png";

import menuDark from "@assets/dark/menu.png";
import menuLight from "@assets/light/menu.png";

const CustomIcon = ({
                        icon = "loading",
                        onBackground = false, // Maintenant un booléen
                        style = {},
                    }) => {
    const {theme} = useTheme();

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
