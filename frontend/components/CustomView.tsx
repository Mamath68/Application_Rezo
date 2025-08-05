import {StyleProp, View, ViewStyle} from "react-native";
import {useTheme} from "@context/ThemeProvider";
import {Theme} from "@theme/index";
import React, {ReactNode} from "react";

type CustomViewProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
};
const CustomView = ({children, style}: CustomViewProps) => {

    const {theme} = useTheme();

    const dynamicStyle = theme === "dark" ? Theme.backgroundColorDark : Theme.backgroundColorLight;

    return (
        <View style={[dynamicStyle, style]}>
            {children}
        </View>
    );
};

export default CustomView;

