import {View} from "react-native";
import {useTheme} from "../context/ThemeProvider";
import {Theme} from "../theme";

const CustomView = ({children, style}) => {
    const {theme} = useTheme();

    // Styles dynamiques basés sur le thème
    const dynamicStyle = theme === "dark" ? Theme.backgroundColorDark : Theme.backgroundColorLight;

    return (
        <View style={[dynamicStyle, style]}>
            {children}
        </View>
    );
};

export default CustomView;

