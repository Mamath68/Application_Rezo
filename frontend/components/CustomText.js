import {Text} from "react-native";

import {useTheme} from "../context/ThemeProvider";
import {TextStyles as styles} from "../theme";

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
        h3: styles.h3,
        h4: styles.h4,
        h5: styles.h5,
        h6: styles.h6,
        p: styles.p,
        note: styles.note,
        description: styles.description,
    };

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
