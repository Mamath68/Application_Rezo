import {Text} from "react-native";
import {useTheme} from "../context/ThemeProvider";
import {TextStyles as styles, Theme} from "../theme";

const CustomText = ({
                        level = "p",
                        children,
                        style = {},
                        center = false,
                    }) => {
    const {theme} = useTheme();

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

    const componentStyle = defStyle[level] || defStyle.p;
    const textColor = theme === "dark" ? Theme.textLight : Theme.textDark;
    const centerStyle = center ? {textAlign: "center"} : {};

    return (
        <Text style={[componentStyle, textColor, centerStyle, style]}>
            {children}
        </Text>
    );
};

export default CustomText;
