import {Text} from "react-native";

import {useTheme} from "@/context/ThemeProvider";
import {TextStyles as styles} from "@/theme";

const CustomText = ({
                        level = "p", // niveau par défaut
                        children,
                        style = {},
                    }) => {
    const {theme} = useTheme();

    // Définir les styles par niveau de texte
    const defStyle = {
        h1: styles.h1,
        h2: styles.h2,
        p: styles.p,
        note: styles.note,
        description: styles.description,
    };

    // Récupération du style pour le niveau de texte
    const getComponentStyle = defStyle[level];

    return (
        <Text
            style={[getComponentStyle, {color: theme === 'dark' ? '#fff' : '#000'}, style]}
        >
            {children}
        </Text>
    );
};

export default CustomText;
